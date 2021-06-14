import React, { useState } from 'react';
import Carousel from './Carousel';
import CatalogHeader from './CatalogHeader';
import MenuOptions from './MenuOptions';
import ListView from './ListView';

import './style.css';

function Catalog() {
  const [viewType, setViewType] = useState(false);

  const handleViewType = () => {
    setViewType(!viewType);
  }

  return (
    <div className="c-content">
      <Carousel />
      <CatalogHeader />
      <MenuOptions viewSelect={handleViewType} />
      { viewType
        ? <ListView />
        : (<div>GridView</div>)}
      {/* <ListView /> */}
    </div>
  );
};

export default Catalog;