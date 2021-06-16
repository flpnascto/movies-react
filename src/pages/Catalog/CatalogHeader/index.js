import React from 'react';
import imgElipse from '../../../assets/ellipse.svg'

import './style.css'

function CatalogHeader() {
  return (
    <div id="catalog_section" className="ch-box-container">
      <img alt="elipse" src={imgElipse} />
      <div className="ch-title ch-bold">catálogo</div>
      <div className="ch-title ">completo</div>
    </div>
  );
};

export default CatalogHeader;
