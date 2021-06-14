import React from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/search.svg'
import './style.css';

function Header() {
  return (
    <div className="box-container">
      <div className="content">
        <span className="logo-gray">suno</span>
        <span className="logo-pink">movies</span>
      </div>
      <div className="content">
        <Link to="/" className="menu-option">início</Link>
        <Link to={{ pathname: '/', hash: '#catalog_section' }} className="menu-option">catálogo</Link>
        <img src={search} alt="search"></img>
      </div>
    </div>
  );
}

export default Header;