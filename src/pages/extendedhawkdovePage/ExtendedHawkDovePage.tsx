import React from 'react';
import './ExtendedHawkDovePage.css';

import ExtendedHawkDoveGame from '../../components/ExtendedHawkDoveGameTable';

export const ExtendedHawkDovePage = () => {
  return (
    <div className="container">
      <div className="input-container">
        <ExtendedHawkDoveGame />
      </div>
    </div>
  );
};

export default ExtendedHawkDovePage;
