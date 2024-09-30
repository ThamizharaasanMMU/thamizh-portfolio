import './styles/App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
          </Routes>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact/>} />
          </Routes>


        </div>

      </div>
    </Router>
    

  );
}

export default App;
