import React from 'react';
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
        <span className="menu-option">início</span>
        <span className="menu-option">catalogo</span>
        <img src={search} alt="search"></img>
      </div>
    </div>
  );
}

export default Header;