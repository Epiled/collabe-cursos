import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/reset.css'
import Menu_mobile from './components/Menu_mobile/Menu_mobile'

function App() {
  return (
    <>
    <Router>
      <Menu_mobile/> 
    </Router>
          
    </>
  )
}

export default App
