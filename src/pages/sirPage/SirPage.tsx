import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

interface SIRMatrix {
  susceptible: number[][];
  infected: number[][];
  recovered: number[][];
}

export const SIRModelPage: React.FC = () => {
  const gridSize = 25;
  const [initialInfectedCount, setInitialInfectedCount] = useState<number>(10);
  const [sirMatrix, setSIRMatrix] = useState<SIRMatrix>({
    susceptible: [],
    infected: [],
    recovered: [],
  });

  const cellSize = 20;
  const padding = 2;

  useEffect(() => {
    const calculateSIRMatrix = () => {
      const sir: SIRMatrix = {
        susceptible: [],
        infected: [],
        recovered: [],
      };

      for (let i = 0; i < gridSize; i++) {
        const susceptibleRow: number[] = [];
        const infectedRow: number[] = [];
        const recoveredRow: number[] = [];

        for (let j = 0; j < gridSize; j++) {
          const randomValue = Math.random();

          const isInfectedInitially = randomValue < initialInfectedCount / (gridSize * gridSize);

          const value = isInfectedInitially ? 1 : randomValue < getProbability(i, j) ? 1 : 0;

          susceptibleRow.push(value);
          infectedRow.push(isInfectedInitially ? 1 : 0);
          recoveredRow.push(0);
        }

        sir.susceptible.push(susceptibleRow);
        sir.infected.push(infectedRow);
        sir.recovered.push(recoveredRow);
      }

      setSIRMatrix(sir);
    };

    calculateSIRMatrix();
  }, [initialInfectedCount]);

  const getProbability = (rowIndex: number, colIndex: number) => {
    const baseProbability = 0.5;
    const influenceRadius = 3;
    const distance = Math.sqrt((rowIndex - gridSize / 2) ** 2 + (colIndex - gridSize / 2) ** 2);
    const probability = baseProbability * Math.exp(-distance / influenceRadius);
    return probability;
  };

  const drawChart = () => {
    const svg = d3.select('#chart');

    svg.selectAll('*').remove();

    const rows = svg.selectAll('.row').data(sirMatrix.susceptible).enter().append('g').attr('class', 'row');

    const cells = rows
      .selectAll('.cell')
      .data((d: number[], i) =>
        d.map((_, j) => ({
          susceptible: sirMatrix.susceptible[i][j],
          infected: sirMatrix.infected[i][j],
          recovered: sirMatrix.recovered[i][j],
          rowIndex: i,
          colIndex: j,
        }))
      )
      .enter()
      .append('rect')
      .attr('class', 'cell')
      .attr('x', (d) => d.colIndex * (cellSize + padding))
      .attr('y', (d) => d.rowIndex * (cellSize + padding))
      .attr('width', cellSize)
      .attr('height', cellSize)
      .style('fill', (d) => {
        if (d.infected === 1) {
          return 'orange';
        }
        if (d.recovered === 1) {
          return 'green';
        }
        return 'lightblue';
      })
      .style('stroke', 'white')
      .style('stroke-width', 0.3);
  };

  useEffect(() => {
    if (sirMatrix.susceptible.length > 0) {
      drawChart();
    }
  }, [sirMatrix]);

  return (
    <div>
      <svg id="chart" width={gridSize * (cellSize + padding)} height={gridSize * (cellSize + padding)} />
      <div>
        <label>
          Initial Infected Count:
          <input
            type="number"
            value={initialInfectedCount}
            onChange={(e) => setInitialInfectedCount(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default SIRModelPage;
