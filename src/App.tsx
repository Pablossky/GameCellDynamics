import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, TheoryPage, ModelPage, HawkDovePage, PrisonersPage, NotFound } from "./pages";
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
          <Route path="/hawkdove" element={<HawkDovePage/>} />
          <Route path="/prisonersdilemma" element={<PrisonersPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
