import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <ThemeContextProvider>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </ThemeContextProvider>
);