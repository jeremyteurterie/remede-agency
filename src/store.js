import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export default configureStore({
  reducer: {
    login: authReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { loginValue } from './slices/authSlice';

// export default configureStore({
//   reducer: {
//     login: loginValue.reducer,
//   },
// });
