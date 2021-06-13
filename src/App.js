import React from 'react';
import Provider from './Context/Provider';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './Routes'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="main-container">
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
