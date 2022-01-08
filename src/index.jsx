import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
// import { HashRouter } from 'react-router-dom';
import Header from './components/Header/index';

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

