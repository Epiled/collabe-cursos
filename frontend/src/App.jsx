import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/reset.css";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";


function App() {
  return (
    <>
      <Router>
        <ResponsiveNavigation />
      </Router>
    </>
  );
}

export default App;
