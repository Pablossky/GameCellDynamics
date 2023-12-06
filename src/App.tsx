import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, TheoryPage, ModelPage, HawkDovePage, PrisonersPage, HawkDoveSpacePage, NotFound, WhatisgamePage, RockpaperPage, BiologymodelPage, MS_Haigh, ExtendedHawkDovePage } from "./pages";
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
          <Route path="/mshaigh" element={<MS_Haigh/>} />
          <Route path="/biologymodels" element={<BiologymodelPage/>} />
          <Route path="/hawkdove" element={<HawkDovePage/>} />
          <Route path="/extendedhawkdove" element={<ExtendedHawkDovePage/>} />
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
