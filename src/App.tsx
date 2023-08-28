import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, TheoryPage, ModelPage, NotFound } from "./pages";
import { MainLayout } from "./layout";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <HashRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route path="/GameCellDynamics/" element={<HomePage/>} />
          <Route path="/GameCellDynamics/model" element={<ModelPage/>} />
          <Route path="/GameCellDynamics/theory" element={<TheoryPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
