import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Payoff {
  Hawk: number;
  Dove: number;
  [key: string]: number;
}

export const HawkDoveSpacePage: React.FC = () => {
  const gridSize = 25;
  const cellSize = 20;
  const padding = 2;

  const [rewardV, setRewardV] = useState<number>(8); // Adjusted initial values
  const [costC, setCostC] = useState<number>(4);   // Adjusted initial values
  const [generations, setGenerations] = useState<number>(1); // Added generations state
  const [populationMatrix, setPopulationMatrix] = useState<number[][]>([]);

  const calculateProbability = (rowIndex: number, colIndex: number) => {
    const baseProbability = 0.5;
    const influenceRadius = 3;

    let neighborsCount = 0;

    for (let i = Math.max(0, rowIndex - influenceRadius); i <= Math.min(gridSize - 1, rowIndex + influenceRadius); i++) {
      for (let j = Math.max(0, colIndex - influenceRadius); j <= Math.min(gridSize - 1, colIndex + influenceRadius); j++) {
        if (populationMatrix[i] && populationMatrix[i][j]) {
          neighborsCount += populationMatrix[i][j];
        }
      }
    }

    const neighborsRatio = neighborsCount / (influenceRadius * influenceRadius * 4);
    const probability = baseProbability + (neighborsRatio - baseProbability) * 0.5;

    return probability;
  };

  const calculateFitness = (rowIndex: number, colIndex: number) => {
    const N = 4;
    const F: Payoff = {
      Hawk: rewardV,
      Dove: costC,
    };

    let fitness = 0;

    for (let i = Math.max(0, rowIndex - 1); i <= Math.min(gridSize - 1, rowIndex + 1); i++) {
      for (let j = Math.max(0, colIndex - 1); j <= Math.min(gridSize - 1, colIndex + 1); j++) {
        if (!(i === rowIndex && j === colIndex) && populationMatrix[i] && populationMatrix[i][j] !== undefined) {
          const currentCellValue = populationMatrix[rowIndex] && populationMatrix[rowIndex][colIndex];
          const neighborCellValue = populationMatrix[i][j];
          fitness += F[currentCellValue] * neighborCellValue;
        }
      }
    }

    return fitness;
  };

  const updatePopulationMatrix = () => {
    const newPopulationMatrix: number[][] = [];

    for (let i = 0; i < gridSize; i++) {
      const newRow: number[] = [];

      for (let j = 0; j < gridSize; j++) {
        const fitness = calculateFitness(i, j);
        const randomValue = Math.random();

        const newValue = randomValue < calculateProbability(i, j) ? 1 : 0;

        newRow.push(newValue);
      }

      newPopulationMatrix.push(newRow);
    }

    setPopulationMatrix(newPopulationMatrix);
  };

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    svg.selectAll('*').remove();

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

  useEffect(() => {
    const calculatePopulationMatrix = () => {
      const matrix: number[][] = [];

      for (let i = 0; i < gridSize; i++) {
        const row: number[] = [];

        for (let j = 0; j < gridSize; j++) {
          const randomValue = Math.random();
          const value = randomValue < calculateProbability(i, j) ? 1 : 0;
          row.push(value);
        }

        matrix.push(row);
      }

      setPopulationMatrix(matrix);
    };

    calculatePopulationMatrix();
  }, [rewardV, costC]);

  useEffect(() => {
    if (populationMatrix.length > 0) {
      drawChart();
    }
  }, [populationMatrix]);

  useEffect(() => {
    for (let generation = 1; generation <= generations; generation++) {
      updatePopulationMatrix();
    }
    drawChart();
  }, [generations]);

  const chartRef = useRef<SVGSVGElement>(null);

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

      <div>
        <label>Generations: </label>
        <input type="number" value={generations} onChange={(e) => setGenerations(Number(e.target.value))} />
      </div>

      <h3>Population Matrix:</h3>
      <svg ref={chartRef} width={gridSize * (cellSize + padding)} height={gridSize * (cellSize + padding)} />
    </div>
  );
};

export default HawkDoveSpacePage;
