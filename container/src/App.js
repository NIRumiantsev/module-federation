import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { MarketingApp } from './apps/MarketingApp';
import { Header } from  './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header/>
          <MarketingApp/>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
};

export { App };