import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, TheoryPage, ModelPage, HawkDovePage, PrisonersPage, HawkDoveSpacePage, NotFound, WhatisgamePage, RockpaperPage } from "./pages";
import { MainLayout } from "./layout";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <HashRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/model" element={<ModelPage/>} />
          <Route path="/theory" element={<TheoryPage/>} />
          <Route path="/whatisgame" element={<WhatisgamePage/>} />
          <Route path="/hawkdove" element={<HawkDovePage/>} />
          <Route path="/rockpaperscissors" element={<RockpaperPage/>} />
          <Route path="/hawkdovespace" element={<HawkDoveSpacePage/>} />
          <Route path="/prisonersdilemma" element={<PrisonersPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
