import React, { useContext } from 'react';
import Carousel from './Carousel';
import CatalogHeader from './CatalogHeader';
import MenuOptions from './MenuOptions';
import CardView from './CardView';
import MoviesContext from '../../Context/MoviesContext';

import './style.css';

function Catalog() {
  const { catalogPage, setCatalogPage } = useContext(MoviesContext);

  const changeCatalogPage = () => {
    setCatalogPage(catalogPage + 1);
  }

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