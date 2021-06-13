import React from 'react';
import CatalogHeader from './CatalogHeader';
import MenuOptions from './MenuOptions';

import './style.css';

function Catalog() {
  return (
    <div className="c-content">
      <CatalogHeader />
      <MenuOptions />
    </div>
  );
};

export default Catalog;