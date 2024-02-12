import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Cursos from "../pages/Cursos/Cursos";
import Sobre from "../pages/Sobre/Sobre";
import MainNavigation from "../components/MainNavigation/MainNavigation";

export default function AppRoutes() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cursos" exact element={<Cursos />} />
        <Route path="/sobre" exact element={<Sobre />} />
      </Routes>
    </Router>
  );
}
