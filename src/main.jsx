import React from 'react';
import ReactDOM from 'react-dom/client';
// routes
import Rooter from './router';
// // module redux
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// // .....
// import authReducer from './services/authSlice';
// styles
import './styles/index.css';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Rooter />
    {/* </Provider> */}
  </React.StrictMode>
);
