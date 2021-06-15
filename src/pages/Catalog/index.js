import React, { useContext, useEffect } from 'react';
import Carousel from './Carousel';
import CatalogHeader from './CatalogHeader';
import MenuOptions from './MenuOptions';
import CardView from './CardView';
import MoviesContext from '../../Context/MoviesContext';

import './style.css';
import { useLocation } from 'react-router';

function Catalog() {
  const { catalogPage, setCatalogPage } = useContext(MoviesContext);

  const changeCatalogPage = () => {
    setCatalogPage(catalogPage + 1);
  }
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) elem.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location.hash]);

  return (
    <div className="c-content">
      <Carousel />
      <CatalogHeader />
      <MenuOptions />
      <CardView />
      <button
        type="button"
        className="c-button"
        onClick={() => changeCatalogPage()}
      >
        carregar mais
      </button>
    </div>
  );
};

export default Catalog;