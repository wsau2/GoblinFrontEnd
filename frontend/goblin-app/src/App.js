import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NotFoundPage from './components/404';
import AboutUs from './components/About';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <ul className=''>
            <li className=''><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
