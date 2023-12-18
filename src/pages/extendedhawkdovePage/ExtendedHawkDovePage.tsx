import React from 'react';
import './ExtendedHawkDovePage.css';

import ExtendedHawkDoveGame from '../../components/ExtendedHawkDoveGameTable';
import ExtendedGame from '../../components/ExtendedGame';

export const ExtendedHawkDovePage = () => {
  return (
    <div className="container">
      <div className="input-container">
      <h2>Rozszerzona Gra Jastrząb i Gołąb</h2>
      Poniżej znajdziemy symulator dla rozszerzonej wersji gry Jastrząb-Gołąb. Możemy rozbudować tę grę poprzez dodanie dwóch nowych strategii, które łączą cechy dwóch oryginalnych strategii. Przypomnijmy, że Gołąb rozpoczyna pojedynek poprzez pokazanie się, ale się wycofuje, jeśli jego przeciwnik eskaluje, natomiast Jastrząb eskaluje i nigdy się nie wycofuje, chyba że odniesie obrażenia.

      Strategia Retaliator zaczyna od pokazania się, ale jeśli przeciwnik eskaluje, to eskaluje w odpowiedzi. Zaczyna więc grać jak Gołąb, ale zmieni się w Jastrzębia w odpowiedzi na wyzwanie. Strategia Bully rozpoczyna od eskalacji, ale jeśli przeciwnik odpowiada eskalacją, wówczas się wycofuje. Zaczyna więc grać jak Jastrząb, ale zmieni zachowanie na podobne do Gołębia w odpowiedzi na wyzwanie.
      </div>
      <div className="input-container">
        <ExtendedHawkDoveGame />
      </div>
      <div className="input-container">
        <ExtendedGame />
      </div>
    </div>
  );
};

export default ExtendedHawkDovePage;
