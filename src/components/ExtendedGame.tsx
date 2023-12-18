import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import './ExtendedGame.css';

interface PayoffParams {
  v: number;
  c: number;
  e: number;
}

interface Payoffs {
  hawkHawk: number;
  hawkDove: number;
  hawkRetaliator: number;
  hawkBully: number;
  doveHawk: number;
  doveDove: number;
  doveRetaliator: number;
  doveBully: number;
  retaliatorHawk: number;
  retaliatorDove: number;
  retaliatorRetaliator: number;
  retaliatorBully: number;
  bullyHawk: number;
  bullyDove: number;
  bullyRetaliator: number;
  bullyBully: number;
}

const ExtendedGame: React.FC = () => {
  const initialParams: PayoffParams = {
    v: 1,
    c: 1,
    e: 1,
  };

  const [params, setParams] = useState<PayoffParams>(initialParams);
  const [payoffs, setPayoffs] = useState<Payoffs | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setParams((prevParams) => ({ ...prevParams, [name]: parseFloat(value) || 0 }));
  };

  const calculatePayoffs = (): void => {
    const newPayoffs: Payoffs = {
      hawkHawk: 1/2 * params.v - 1/2 * params.c,
      hawkDove: 2 * 1/2 * params.v,
      hawkRetaliator: 1/2 * params.v - 1/2 * params.c + params.e,
      hawkBully: 2 * 1/2 * params.v,
      doveHawk: 0,
      doveDove: 1/2 * params.v,
      doveRetaliator: 1/2 * params.v - params.e,
      doveBully: 0,
      retaliatorHawk: 1/2 * params.v - 1/2 * params.c - params.e,
      retaliatorDove: 1/2 * params.v + params.e,
      retaliatorRetaliator: 1/2 * params.v,
      retaliatorBully: 2 * 1/2 * params.v,
      bullyHawk: 0,
      bullyDove: 2 * 1/2 * params.v,
      bullyRetaliator: 0,
      bullyBully: 1/2 * params.v,
    };

    setPayoffs(newPayoffs);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    calculatePayoffs();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
      <h2>Symulator</h2>
        <Col md="6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="paramV">
              <Form.Label>Value (korzyść)</Form.Label>
              <Form.Control
                type="number"
                name="v"
                value={params.v}
                onChange={handleInputChange}
                step="any"
                required
              />
            </Form.Group>
            <Form.Group controlId="paramC">
              <Form.Label>Cost (koszt)</Form.Label>
              <Form.Control
                type="number"
                name="c"
                value={params.c}
                onChange={handleInputChange}
                step="any"
                required
              />
            </Form.Group>
            <Form.Group controlId="paramE">
              <Form.Label>E (ekstra)</Form.Label>
              <Form.Control
                type="number"
                name="e"
                value={params.e}
                onChange={handleInputChange}
                step="any"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Oblicz Wypłaty
            </Button>
          </Form>
        </Col>
      </Row>
      {payoffs && (
        <Row className="justify-content-md-center mt-4">
          <Col md="8">
            <h4>Wyniki:</h4>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Jastrząb</th>
                  <th>Gołąb</th>
                  <th>Retaliator</th>
                  <th>Bully</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jastrząb</td>
                  <td>{payoffs.hawkHawk}</td>
                  <td>{payoffs.hawkDove}</td>
                  <td>{payoffs.hawkRetaliator}</td>
                  <td>{payoffs.hawkBully}</td>
                </tr>
                <tr>
                  <td>Gołąb</td>
                  <td>{payoffs.doveHawk}</td>
                  <td>{payoffs.doveDove}</td>
                  <td>{payoffs.doveRetaliator}</td>
                  <td>{payoffs.doveBully}</td>
                </tr>
                <tr>
                  <td>Retaliator</td>
                  <td>{payoffs.retaliatorHawk}</td>
                  <td>{payoffs.retaliatorDove}</td>
                  <td>{payoffs.retaliatorRetaliator}</td>
                  <td>{payoffs.retaliatorBully}</td>
                </tr>
                <tr>
                  <td>Bully</td>
                  <td>{payoffs.bullyHawk}</td>
                  <td>{payoffs.bullyDove}</td>
                  <td>{payoffs.bullyRetaliator}</td>
                  <td>{payoffs.bullyBully}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ExtendedGame;
