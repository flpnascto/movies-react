import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/search.svg'
import MoviesContext from '../../Context/MoviesContext';
import './style.css';

function Header() {
  const { showSearch, setShowSearch } = useContext(MoviesContext);
  return (
    <div className="header-container">
      <div className="header-content">
        <span className="header-logo header-color-gray">suno</span>
        <span className="header-logo header-color-pink">movies</span>
      </div>
      <div className="header-content">
        <Link to="/" className="header-menu-option">início</Link>
        <Link to={{ pathname: '/', hash: '#catalog_section' }} className="header-menu-option">catálogo</Link>
        <button type="button" onClick={() => setShowSearch(!showSearch)}>
          <img src={search} alt="search"></img>
        </button>
      </div>
    </div>
  );
}

export default Header;