import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// routes
import Rooter from './router';
// store redux
import store from './store';
// styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Rooter />
    </Provider>
  </React.StrictMode>
);
