import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "../src/components/login/styles.css";
import Home from './screens/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
    <div> 
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
     </div>
    </Router>
  );
}

export default App;
