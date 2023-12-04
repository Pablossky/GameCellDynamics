import React, { useEffect, useRef, useState } from 'react';

// InfoSection component to display information about the simulation
const InfoSection: React.FC = () => (
  <div>
    <h2>Rock-Paper-Scissors Replicator Dynamics</h2>
    <p>
      Ta strona przedstawia ewolucję populacji w grze "Kamień-Nożyce-Papier" za pomocą dynamiki
      replikatora.
    </p>
    <p>
      W grze tym używamy macierzy wypłat, gdzie wiersze i kolumny reprezentują strategie graczy. Na
      przykład, A[0][1] to wypłata dla gracza używającego strategii Rock (Kamień), gdy przeciwnik
      używa strategii Scissors (Nożyce).
    </p>
    <p>
      Prosimy zauważyć, że ta strona jest jedynie ilustracją matematycznego modelu i nie
      reprezentuje rzeczywistego świata. Dla uproszczenia, używamy jednej metody numerycznej do
      symulacji dynamiki.
    </p>
  </div>
);

export const RockpaperPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [A, setA] = useState<number[][]>([
    [0, 1, -1],
    [-2, 0, 2],
    [2, -1, 0],
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initY = [1 - 1 / 5, 1 / 10, 1 / 10];
    const dt = 0.01;

    const points: { x: number; y: number; color: string }[] = [];

    let x = initY[0];
    let y = initY[1];

    const plotPoint = (color: string) => {
      points.push({ x: x * canvas.width, y: y * canvas.height, color });
    };

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dodaj etykiety osi x i y
      ctx.fillStyle = 'black';
      ctx.font = '12px Arial';
      ctx.fillText('Rock', canvas.width - 20, canvas.height - 5);
      ctx.fillText('Scissors', 5, canvas.height - 5);
      ctx.fillText('Paper', canvas.width / 2 - 15, 15);

      points.forEach((point) => {
        ctx.fillStyle = point.color;
        ctx.fillRect(point.x, point.y, 2, 2);
      });
    };

    for (let t = 0; t <= 100; t += dt) {
      const xDot = x * (A[0][0] * x + A[0][1] * y + A[0][2] * (1 - x - y));
      const yDot = y * (A[1][0] * x + A[1][1] * y + A[1][2] * (1 - x - y));

      x = x + dt * xDot;
      y = y + dt * yDot;

      plotPoint('blue');
    }

    drawPoints(); // Rysuj wszystkie punkty na końcu symulacji
  }, [A]);

  const handleInputChange = (row: number, col: number, value: string) => {
    const newA = A.map((r, i) =>
      r.map((v, j) => (i === row && j === col ? parseFloat(value) : v))
    );
    setA(newA);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InfoSection />
      <div style={{ marginTop: '20px' }}>
        <h3>Macierz A</h3>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>Rock</td>
              <td>Scissors</td>
              <td>Paper</td>
            </tr>
            {A.map((row, i) => (
              <tr key={i}>
                <td>{i === 0 ? 'Rock' : i === 1 ? 'Scissors' : 'Paper'}</td>
                {row.map((value, j) => (
                  <td key={j}>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => handleInputChange(i, j, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <canvas ref={canvasRef} width={400} height={400} style={{ border: '1px solid black' }} />
    </div>
  );
};

export default RockpaperPage;
