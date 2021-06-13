import React from 'react';
import CatalogHeader from './CatalogHeader';
import MenuOptions from './MenuOptions';
import ListView from './ListView';

import './style.css';

function Catalog() {
  return (
    <div className="c-content">
      <CatalogHeader />
      <MenuOptions />
      <ListView />
    </div>
  );
};

export default Catalog;