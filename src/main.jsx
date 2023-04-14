import React from 'react';
import ReactDOM from 'react-dom/client';
// routes
import Rooter from './router';
// styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rooter />
  </React.StrictMode>
);
