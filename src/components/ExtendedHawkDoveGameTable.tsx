import React from 'react';
import './ExtendedHawkDoveGame.css';

const ExtendedHawkDoveGame = () => {
  return (
    <div>
      <h2>Rozszerzona Gra Jastrząb i Gołąb</h2>
      <table className="hawk-dove-table">
        <thead>
          <tr>
            <th>Strategie</th>
            <th>Jastrząb</th>
            <th>Gołąb</th>
            <th>Odpretiator</th>
            <th>Tyran</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zachowanie</td>
            <td>Obydwoje się pokazują, każde wygrywa z prawdopodobieństwem 1/2</td>
            <td>Obydwoje walczą aż do momentu, gdy jeden zostanie ranny</td>
            <td>Obydwoje pokazują się jak Gołębie</td>
            <td>Obydwoje eskalują, jeden od razu się wycofuje bez ran</td>
          </tr>
          <tr>
            <td>Jastrząb</td>
            <td>Eskaluje, a Gołąb się wycofuje</td>
            <td>Hawk escalates, Retaliator responds, and they fight until one is injured</td>
            <td>Both display as Doves</td>
            <td>Bully escalates, Retaliator responds, Bully retreats</td>
          </tr>
          <tr>
            <td>Gołąb</td>
            <td>Hawk escalates and Dove retreats</td>
            <td>Both display as Doves</td>
            <td>Bully escalates, Retaliator responds, Bully retreats</td>
            <td>Both display as Doves</td>
          </tr>
          <tr>
            <td>Odpretiator</td>
            <td>Both escalate but Bully then retreats</td>
            <td>Both escalate, Retaliator responds, and they fight until one is injured</td>
            <td>Both display as Doves</td>
            <td>Both escalate, one retreats immediately with no injury</td>
          </tr>
          <tr>
            <td>Tyran</td>
            <td>Hawk escalates, Retaliator responds, and they fight until one is injured</td>
            <td>Bully escalates and Dove retreats</td>
            <td>Both display as Doves</td>
            <td>Both escalate, one retreats immediately with no injury</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExtendedHawkDoveGame;
