import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import '../styles/Navbar.css';
import logo from '../images/logo1.png';

function Navbar({ onSearchIconClick }) {
  return (
    <AppBar position="static">
      <Toolbar className="navbar__toolbar">
        <Link to="/" className="navbar__logo-link">
          <img src={logo} alt="Netflix Clone Logo" className="navbar__logo" />
        </Link>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/about" className="navbar__link">Tentang</Link>
          <Link to="/documentation" className="navbar__link">Dokumentasi</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
