import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './customComponents/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
  <React.StrictMode>
    <ScrollToTop />
    <App />
  </React.StrictMode>
  </Router>
);

reportWebVitals();
