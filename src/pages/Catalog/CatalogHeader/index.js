import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import imgElipse from '../../../assets/ellipse.svg'

import './style.css'

function CatalogHeader() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) elem.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location]);

  return (
    <div id="catalog_section" className="ch-box-container">
      <img alt="elipse" src={imgElipse} />
      <div className="ch-title ch-bold">catálogo</div>
      <div className="ch-title ">completo</div>
    </div>
  );
};

export default CatalogHeader;
