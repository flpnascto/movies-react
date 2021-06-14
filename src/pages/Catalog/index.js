import React from 'react';
import Carousel from './Carousel';
import CatalogHeader from './CatalogHeader';
import MenuOptions from './MenuOptions';
import CardView from './CardView';

import './style.css';

function Catalog() {
  return (
    <div className="c-content">
      <Carousel />
      <CatalogHeader />
      <MenuOptions />
      <CardView />
    </div>
  );
};

export default Catalog;