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
  const [infectivity, setInfectivity] = useState<number>(0.2);
  const [recoverRate, setRecoverRate] = useState<number>(0.1);
  const [simulationTime, setSimulationTime] = useState<number>(1);
  const [sirMatrix, setSIRMatrix] = useState<SIRMatrix>({
    susceptible: [],
    infected: [],
    recovered: [],
  });
  const [cellHistory, setCellHistory] = useState<number[][][]>([]);

  const cellSize = 20;
  const padding = 2;

  useEffect(() => {
    const calculateSIRMatrix = () => {
      const sir: SIRMatrix = {
        susceptible: [],
        infected: [],
        recovered: [],
      };
    
      const history: number[][][] = [];
    
      for (let i = 0; i < gridSize; i++) {
        const susceptibleRow: number[] = [];
        const infectedRow: number[] = [];
        const recoveredRow: number[] = [];
        const cellHistoryRow: number[][] = new Array(gridSize).fill([]).map(() => [0]);
    
        for (let j = 0; j < gridSize; j++) {
          const randomValue = Math.random();
    
          const isInfectedInitially = randomValue < initialInfectedCount / (gridSize * gridSize);
    
          const value = isInfectedInitially
            ? 1
            : randomValue < getProbability(i, j)
            ? 1
            : 0;
    
          susceptibleRow.push(value);
          infectedRow.push(isInfectedInitially ? 1 : 0);
          recoveredRow.push(0);
          cellHistoryRow.push([value]);
        }
    
        sir.susceptible.push(susceptibleRow);
        sir.infected.push(infectedRow);
        sir.recovered.push(recoveredRow);
        history.push(cellHistoryRow);
      }
    
      setSIRMatrix(sir);
      setCellHistory(history);
    };
    
const simulateEpidemic = () => {
  for (let time = 1; time <= simulationTime; time++) {
    const updatedInfected = new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(0));
    const updatedSusceptible = new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(0));
    const updatedRecovered = new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(0));

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const currentHistory = cellHistory[i] && cellHistory[i][j];
        const currentValue = currentHistory && currentHistory[currentHistory.length - 1];

        if (sirMatrix.infected[i] && sirMatrix.infected[i][j] === 1) {
          const recoveryProbability = Math.min(recoverRate, 1);
          if (Math.random() < recoveryProbability) {
            updatedInfected[i][j] = 0;
            if (updatedSusceptible[i]) {
              updatedSusceptible[i][j] = 0;
              updatedRecovered[i][j] = 1;
              currentHistory && currentHistory.push(1);
            }
          } else {
            updatedInfected[i][j] = 1; // Stays infected
          }
        } else if (sirMatrix.recovered[i] && sirMatrix.recovered[i][j] === 1) {
          updatedRecovered[i][j] = 1; // Stays recovered
        } else if (sirMatrix.susceptible[i] && sirMatrix.susceptible[i][j] === 1) {
          for (let k = Math.max(0, i - 1); k <= Math.min(gridSize - 1, i + 1); k++) {
            for (let l = Math.max(0, j - 1); l <= Math.min(gridSize - 1, j + 1); l++) {
              if (sirMatrix.infected[k] && sirMatrix.infected[k][l] === 1 && Math.random() < infectivity) {
                if (updatedSusceptible[i]) {
                  updatedSusceptible[i][j] = 1;
                  currentHistory && currentHistory.push(1);
                }
              }
            }
          }
        }
      }
    }

    const updatedSIRMatrix: SIRMatrix = {
      susceptible: updatedSusceptible,
      infected: updatedInfected,
      recovered: updatedRecovered,
    };

    setSIRMatrix(updatedSIRMatrix);
    setCellHistory((prevHistory) => prevHistory.map((row, i) => row.map((_, j) => [...row[j], updatedSIRMatrix.susceptible[i][j]])));
  }
};

    calculateSIRMatrix();
    simulateEpidemic();
  }, [initialInfectedCount, infectivity, recoverRate, simulationTime]);

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
          return 'red';
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
      <div>
        <label>
          Infectivity:
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={infectivity}
            onChange={(e) => setInfectivity(Math.min(1, Math.max(0, Number(e.target.value))))}
          />
        </label>
      </div>
      <div>
        <label>
          Recover Rate:
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={recoverRate}
            onChange={(e) => setRecoverRate(Math.min(1, Math.max(0, Number(e.target.value))))}
          />
        </label>
      </div>
      <div>
        <label>
          Simulation Time:
          <input
            type="number"
            value={simulationTime}
            onChange={(e) => setSimulationTime(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default SIRModelPage;
