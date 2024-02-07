import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveNavigation from "../components/ResponsiveNavigation/ResponsiveNavigation";
import Home from "../pages/Home/Home";

export default function AppRoutes() {
  return (
    <Router>
      <ResponsiveNavigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}
