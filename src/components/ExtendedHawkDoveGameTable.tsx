import React from 'react';
import './ExtendedHawkDoveGame.css';

const ExtendedHawkDoveGame = () => {
  return (
    <div>
      <table className="hawk-dove-table">
        <thead>
          <tr>
            <th>Strategie</th>
            <th>Jastrząb (Hawk)</th>
            <th>Gołąb (Dove)</th>
            <th>Odwet (Retaliator)</th>
            <th>Tyran (Bully)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jastrząb (Hawk)</td>
            <td>Obaj walczą, dopóki jeden nie zostanie zraniony</td>
            <td>H eskaluje, a D wycofuje się</td>
            <td>Nasila się, R odpowiada i walczą, aż jeden z nich zostanie ranny</td>
            <td>Obydwa nasilają się, ale B następnie się wycofuje</td>
          </tr>
          <tr>
            <td>Gołąb (Dove)</td>
            <td>H eskaluje, a D wycofuje się</td>
            <td>Oba pojawiają się, każdy wygrywa z prawdopodobieństwem 1/2</td>
            <td>Oba wyświetlają się jako D</td>
            <td>B eskaluje, a D cofa się</td>
          </tr>
          <tr>
            <td>Odwet (Retaliator)</td>
            <td>Nasila się, R odpowiada i walczą, aż jeden z nich zostanie ranny</td>
            <td>Oba wyświetlają się jako D</td>
            <td>Oba pojawiają się jako gołębie</td>
            <td>B eskaluje, R odpowiada, B wycofuje się</td>
          </tr>
          <tr>
            <td>Tyran (Bully)</td>
            <td>Obydwa nasilają się, ale B następnie się wycofuje</td>
            <td>B eskaluje, a D cofa się</td>
            <td>B eskaluje, R odpowiada, B wycofuje się</td>
            <td>Oba nasilają się, jeden wycofuje się natychmiast bez obrażeń</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExtendedHawkDoveGame;
