import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root){
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,root
    )  
  }
})
postMessage({ payload: 'removeLoading' }, '*')
