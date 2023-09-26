// Importowanie niezbędnych modułów
import React, { useState } from 'react';
import styled from 'styled-components';

// Komponent reprezentujący kratownicę
const Kratownica = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
`;

// Komponent reprezentujący pojedynczy fenotyp
const Fenotyp = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
`;

// Główny komponent React
function App() {
  // Przykładowa kratownica fenotypów
  const fenotypy = [
    'red', 'green', 'blue', 'yellow', 'purple', 'orange',
    'pink', 'brown', 'gray', 'cyan', 'magenta', 'lime'
  ];

  // Stan do przechowywania fenotypów
  const [fenotypyState] = useState(fenotypy);

  return (
    <div>
      <h1>Analiza modelu "jastrząb-gołąb"</h1>
      <p>Następnym etapem analizy modelu jest wprowadzenie mieszanych gier przestrzennych. W MSEG również wykorzystamy losowo wygenerowaną kratownicę początkową.</p>
      <Kratownica>
        {fenotypyState.map((kolor, index) => (
          <Fenotyp key={index} color={kolor} />
        ))}
      </Kratownica>
    </div>
  );
}

export default App;
