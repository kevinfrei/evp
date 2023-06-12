import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root,
    );
  }
});
