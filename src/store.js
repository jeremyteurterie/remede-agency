import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/Auth.Slice';

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default Store;
