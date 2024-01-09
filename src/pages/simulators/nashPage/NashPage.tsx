import React, { useState } from 'react';
import './NashPage.css';

export const NashPage = () => {
  const [matrixPlayer1, setMatrixPlayer1] = useState<string>('');
  const [matrixPlayer2, setMatrixPlayer2] = useState<string>('');
  const [mixedStrategiesPlayer1, setMixedStrategiesPlayer1] = useState<number[] | null>(null);
  const [mixedStrategiesPlayer2, setMixedStrategiesPlayer2] = useState<number[] | null>(null);
  const [nashEquilibrium, setNashEquilibrium] = useState<{ player1: number[]; player2: number[] } | null>(null);

  const handleMatrixChangePlayer1 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMatrixPlayer1(event.target.value);
  };

  const handleMatrixChangePlayer2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMatrixPlayer2(event.target.value);
  };

  const calculateNashEquilibrium = () => {
    try {
      const parsedMatrixPlayer1 = JSON.parse(matrixPlayer1);
      const parsedMatrixPlayer2 = JSON.parse(matrixPlayer2);

      // Step 1: Calculate mixed strategies for player 1 (A)
      const p = solveLinearEquation(parsedMatrixPlayer1, Array(parsedMatrixPlayer2[0].length).fill(1));

      // Step 2: Calculate mixed strategies for player 2 (B)
      const q = solveLinearEquation(transpose(parsedMatrixPlayer2), Array(parsedMatrixPlayer1.length).fill(1));

      // Normalize the strategies
      const normalizedP = normalizeStrategy(p);
      const normalizedQ = normalizeStrategy(q);

      setMixedStrategiesPlayer1(normalizedP);
      setMixedStrategiesPlayer2(normalizedQ);

      // Check Nash Equilibrium
      const nashEquilibriumCheck = multiplyMatrixVector(parsedMatrixPlayer1, normalizedQ).every(
        (val, index) => val === multiplyMatrixVector(transpose(parsedMatrixPlayer2), normalizedP)[index]
      );

      if (nashEquilibriumCheck) {
        setNashEquilibrium({
          player1: normalizedP,
          player2: normalizedQ,
        });
      } else {
        setNashEquilibrium(null);
      }
    } catch (error) {
      console.error('Error in calculating Nash Equilibrium. Please check the matrix format.');
      setMixedStrategiesPlayer1(null);
      setMixedStrategiesPlayer2(null);
      setNashEquilibrium(null);
    }
  };

  const solveLinearEquation = (matrix: number[][], vector: number[]) => {
    const matrixA = matrix.map((row) => [...row, 1]);
    const vectorB = [...vector, 0];
    const augmentedMatrix = matrixA.map((row, index) => [...row, vectorB[index]]);

    for (let i = 0; i < augmentedMatrix.length; i++) {
      const pivotRow = augmentedMatrix[i];

      // Normalize the pivot row
      const pivotElement = pivotRow[i];
      const normalizedPivotRow = pivotRow.map((val) => val / pivotElement);
      augmentedMatrix[i] = normalizedPivotRow;

      // Eliminate other rows
      for (let j = 0; j < augmentedMatrix.length; j++) {
        if (i !== j) {
          const factor = augmentedMatrix[j][i];
          const eliminatedRow = augmentedMatrix[i].map((val) => val * factor);
          augmentedMatrix[j] = augmentedMatrix[j].map((val, index) => val - eliminatedRow[index]);
        }
      }
    }

    return augmentedMatrix.map((row) => row[row.length - 1]);
  };

  const transpose = (matrix: number[][]) => {
    return matrix[0].map((col, i) => matrix.map((row) => row[i]));
  };

  const multiplyMatrixVector = (matrix: number[][], vector: number[]) => {
    return matrix.map((row) => row.reduce((sum, val, index) => sum + val * vector[index], 0));
  };

  const normalizeStrategy = (strategy: number[]) => {
    const sum = strategy.reduce((acc, val) => acc + val, 0);
    const normalizedStrategy = strategy.map((val) => val / sum);

    // Ensure the values are within the range of 0 to 1 and round to 2 decimal places
    return normalizedStrategy.map((val) => Math.max(0, Math.min(1, val))).map((val) => Math.round(val * 100) / 100);
  };

  return (
    <div className="container">
      <div className="input-container">
        <h2>Simulator Nash Equilibrium</h2>
        <div className="matrix-input-container">
          <div className="input-wrapper">
            <label>Game Matrix Player 1 (JSON format): </label>
            <textarea
              placeholder="Enter the matrix in JSON format, e.g., [[3, 2], [4, 4]]"
              value={matrixPlayer1}
              onChange={handleMatrixChangePlayer1}
              rows={5}
              cols={30}
            />
            <div>
              Example : [
                [3, 2, 1],
    [1, 4, 2],
    [0, 3, 5]
  ]</div>
          </div>
          <div className="input-wrapper">
            <label>Game Matrix Player 2 (JSON format): </label>
            <textarea
              placeholder="Enter the matrix in JSON format, e.g., [[1, 0], [2, 3]]"
              value={matrixPlayer2}
              onChange={handleMatrixChangePlayer2}
              rows={5}
              cols={30}
            />
            <div>
              Example : [
                [3, 1, 0],
    [2, 4, 3],
    [1, 2, 5]
  ]</div>
            
          </div>
        </div>
        <button onClick={calculateNashEquilibrium}>Calculate Nash Equilibrium</button>
      </div>
      <div className="result-container">
        <h3>Mixed Strategies for Player 1 (A):</h3>
        {mixedStrategiesPlayer1 ? (
          <pre>{JSON.stringify(mixedStrategiesPlayer1, null, 2)}</pre>
        ) : (
          <p>No valid input or error in calculation.</p>
        )}
        <h3>Mixed Strategies for Player 2 (B):</h3>
        {mixedStrategiesPlayer2 ? (
          <pre>{JSON.stringify(mixedStrategiesPlayer2, null, 2)}</pre>
        ) : (
          <p>No valid input or error in calculation.</p>
        )}
        <h3>Nash Equilibrium:</h3>
        {nashEquilibrium ? (
          <pre>{JSON.stringify(nashEquilibrium, null, 2)}</pre>
        ) : (
          <p>No Nash Equilibrium found.</p>
        )}
      </div>
    </div>
  );
};

export default NashPage;
