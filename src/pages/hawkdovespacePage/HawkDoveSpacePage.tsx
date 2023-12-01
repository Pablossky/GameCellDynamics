import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Payoff {
  Hawk: number;
  Dove: number;
}

export const HawkDoveSpacePage: React.FC = () => {
  const gridSize = 25;
  const [rewardV, setRewardV] = useState<number>(4);
  const [costC, setCostC] = useState<number>(2);
  const [populationMatrix, setPopulationMatrix] = useState<number[][]>([]);

  const cellSize = 20;
  const padding = 2;

  useEffect(() => {
    const calculatePopulationMatrix = () => {
      const matrix: number[][] = [];

      for (let i = 0; i < gridSize; i++) {
        const row: number[] = [];

        for (let j = 0; j < gridSize; j++) {
          const randomValue = Math.random(); // losowa liczba z zakresu [0, 1)

          // Przydziel losowo wartość 1 (Hawk) lub 0 (Dove) na podstawie parametrów
          const value = randomValue < getProbability(i, j) ? 1 : 0;

          row.push(value);
        }

        matrix.push(row);
      }

      setPopulationMatrix(matrix);
    };

    const getProbability = (rowIndex: number, colIndex: number) => {
      // Parametry warunkujące populację Hawk (1) lub Dove (0)
      const baseProbability = 0.5;
      const influenceRadius = 3; // Promień wpływu sąsiadujących pól
  
      let neighborsCount = 0;
  
      for (let i = Math.max(0, rowIndex - influenceRadius); i <= Math.min(gridSize - 1, rowIndex + influenceRadius); i++) {
        for (let j = Math.max(0, colIndex - influenceRadius); j <= Math.min(gridSize - 1, colIndex + influenceRadius); j++) {
          if (populationMatrix[i] && populationMatrix[i][j]) {
            neighborsCount += populationMatrix[i][j];
          }
        }
      }
  
      const neighborsRatio = neighborsCount / (influenceRadius * influenceRadius * 4); // Normalizacja do [0, 1]
  
      // Wpływ sąsiadów na prawdopodobieństwo
      const probability = baseProbability + (neighborsRatio - baseProbability) * 0.5;
  
      return probability;
    };

    calculatePopulationMatrix();
  }, [rewardV, costC]);

  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (populationMatrix.length > 0) {
      drawChart();
    }
  }, [populationMatrix]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    // Clear previous chart
    svg.selectAll('*').remove();

    // Create the matrix
    const rows = svg.selectAll('.row').data(populationMatrix).enter().append('g').attr('class', 'row');

    const cells = rows
      .selectAll('.cell')
      .data((d: number[], i) => d.map((cell) => ({ value: cell, rowIndex: i })))
      .enter()
      .append('rect')
      .attr('class', 'cell')
      .attr('x', (d, i) => i * (cellSize + padding))
      .attr('y', (d) => d.rowIndex * (cellSize + padding))
      .attr('width', cellSize)
      .attr('height', cellSize)
      .style('fill', (d) => (d.value === 1 ? 'steelblue' : 'lightgreen'));
  };

  return (
    <div>
      <h2>HawkDoveSpace Population Matrix</h2>
      <p>Enter Reward (V) and Cost (C) values:</p>

      <div>
        <label>Reward (V): </label>
        <input type="number" value={rewardV} onChange={(e) => setRewardV(Number(e.target.value))} />
      </div>

      <div>
        <label>Cost (C): </label>
        <input type="number" value={costC} onChange={(e) => setCostC(Number(e.target.value))} />
      </div>

      <h3>Population Matrix:</h3>
      <svg ref={chartRef} width={gridSize * (cellSize + padding)} height={gridSize * (cellSize + padding)} />
    </div>
  );
};

export default HawkDoveSpacePage;
