import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './client/pages/Home';
import Fetch from './client/pages/Fetch';
import Save from './client/pages/Save';
import Logo from './client/components/Logo';
import Globe from './client/pages/Globe';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='home-items'>

        <Logo logo="https://cdn.prod.website-files.com/63efbaeda51a4e2fac57cad6/63efd250ba04fc992c230ade_fieldsync-1c-white.svg" />

        {/* Navigation Links */}
        <nav className='nav-links'>
          <Link to="/" className='link'>
            Home
          </Link>
          <span className='separator'> | </span>
          <Link to="/save" className='link'>
            Save
          </Link>
          <span className='separator'> | </span>
          <Link to="/fetch" className='link'>
            Fetch
          </Link>
          <span className='separator'> | </span>
          <Link to="/globe" className='link'>
            Globe
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/globe" element={<Globe />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
