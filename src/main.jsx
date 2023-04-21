import React from 'react';
import ReactDOM from 'react-dom/client';
// routes
import Rooter from './router';
// module redux
import { Provider } from 'react-redux';
// store redux
// import Store from './store';
// styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={Store}> */}
    <Rooter />
    {/* </Provider> */}
  </React.StrictMode>
);
