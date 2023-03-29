import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import Footer from './components/layout/footer/Footer';

import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementsByTagName('body')[0]);
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);