import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Label,
} from 'recharts';
import { Form, Row, Col } from 'react-bootstrap';

// Placeholder matrix operation function (replace with ml-matrix functionality)
function performMatrixOperation(c: number, t: number, b0: number, s: number): number {
  // Perform your matrix operations here using 'ml-matrix' functions
  // This is a placeholder, replace it with the correct operations
  return c * t + b0 * s;
}

export const MS_Haigh = () => {
  const [N, setN] = useState(10 ** 6);
  const [s, setS] = useState(0.025);
  const [cl, setCl] = useState(0.00008);
  const [t1, setT1] = useState(10001);

  // Display the data on the page
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>MS Haigh Simulation</h2>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form.Group as={Row}>
            <Form.Label column md="4">
              Population Size (N):
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" value={N} onChange={(e) => setN(parseInt(e.target.value, 10))} />
            </Col>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group as={Row}>
            <Form.Label column md="4">
              Fitness Advantage (s):
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" value={s} onChange={(e) => setS(parseFloat(e.target.value))} />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form.Group as={Row}>
            <Form.Label column md="4">
              Linkage Strength (cl):
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" value={cl} onChange={(e) => setCl(parseFloat(e.target.value))} />
            </Col>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group as={Row}>
            <Form.Label column md="4">
              Time (t1):
            </Form.Label>
            <Col md="8">
              <input
                type="range"
                min="1"
                max="20000"
                step="1"
                value={t1}
                onChange={(e) => setT1(parseInt(e.target.value, 10))}
              />
              {t1}
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <ResponsiveContainer width="80%" height={400}>
        <LineChart
          data={Array.from({ length: 101 }, (_, i) => i * cl).map((c) => ({
            c,
            hl: performMatrixOperation(c, t1, 1 / N, s),
          }))}
        >
          <XAxis dataKey="c">
            <Label value="Linkage Strength (c)" position="bottom" />
          </XAxis>
          <YAxis>
            <Label value="Heterozygosity" angle={-90} position="insideLeft" />
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="hl" name="Heterozygosity" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
