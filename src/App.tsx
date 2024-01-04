import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage, TheoryPage, ModelPage, HawkDovePage, PrisonersPage, HawkDoveSpacePage, NotFound, WhatisgamePage, RockpaperPage, BiologymodelPage, MS_Haigh, ExtendedHawkDovePage, SIRModelPage } from './pages';
import { MainLayout } from './layout';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Dodaj dowolną logikę, która musi być wykonana po przełączeniu trybu ciemnego/jasnego
  };

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/model" element={<ModelPage />} />
            <Route path="/theory" element={<TheoryPage />} />
            <Route path="/whatisgame" element={<WhatisgamePage />} />
            <Route path="/mshaigh" element={<MS_Haigh />} />
            <Route path="/biologymodels" element={<BiologymodelPage />} />
            <Route path="/hawkdove" element={<HawkDovePage />} />
            <Route path="/sir" element={<SIRModelPage />} />
            <Route path="/extendedhawkdove" element={<ExtendedHawkDovePage />} />
            <Route path="/rockpaperscissors" element={<RockpaperPage />} />
            <Route path="/hawkdovespace" element={<HawkDoveSpacePage />} />
            <Route path="/prisonersdilemma" element={<PrisonersPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
