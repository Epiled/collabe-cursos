
import "./assets/styles/reset.css";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/routes"; 

function App() {
  return (
    <div className="container_app">
      <AppRoutes /> 
      <Footer />
    </div>
  );
}

export default App;

