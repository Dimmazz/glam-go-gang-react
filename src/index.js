import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/StyleBase/_base.scss';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

