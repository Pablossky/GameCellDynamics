import React, { useEffect, useRef } from 'react';
import numeric from 'numeric';

export const RockpaperPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const A: number[][] = [
      [0, 1, -1],
      [-2, 0, 2],
      [2, -1, 0],
    ];

    const initY: number[] = [1 - 1 / 5, 1 / 10, 1 / 10];

    const dynamics = (t: number, y: number[]) =>
      numeric.dotMMbig(A, y).map((val: number, index: number) => val - numeric.dot(y, A[index], y));

    const results = numeric.dopri(0, 100, initY, dynamics);

    results.forEach((result: number[]) => {
      const [x, y] = result;
      ctx.fillRect(x * canvas.width, y * canvas.height, 2, 2);
    });
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default RockpaperPage;
