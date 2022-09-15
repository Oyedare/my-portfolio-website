import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalFont } from './fonts/font';
import { GlobalStyle } from './styles/GlobalStyles';
import { ResetStyle } from './styles/Reset';
// import './font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalFont />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
