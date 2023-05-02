import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

/**
 * Configures and creates a Redux store with the authReducer slice.
 * @function
 * @returns {Object} The Redux store object.
 */
export default configureStore({
  reducer: {
    login: authReducer,
  },
});
