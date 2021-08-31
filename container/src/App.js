import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MarketingApp } from './apps/MarketingApp';
import { Header } from  './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <MarketingApp/>
      </div>
    </BrowserRouter>
  )
};

export { App };