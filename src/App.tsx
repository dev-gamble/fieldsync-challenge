import './App.css'
import Home from './client/pages/Home'
import Fetch from './client/pages/Fetch'
import Save from './client/pages/Save'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Logo from './client/components/Logo';

const App: React.FC = () => {
  return (
    <Router>
      <div className='home-items'>

        <Logo logo="https://cdn.prod.website-files.com/63efbaeda51a4e2fac57cad6/63efd250ba04fc992c230ade_fieldsync-1c-white.svg" />

        {/* Navigation Links */}
        <nav className='nav-links'>
          <Link to="/">
            <a className='link'>Home</a>
          </Link>
          <Link to="/save">
            <a className='link'>Save</a>
          </Link>
          <Link to="/fetch">
            <a className='link'>Fetch</a>
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/save" element={<Save />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
