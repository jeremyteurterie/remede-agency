// import { createSlice } from '@reduxjs/toolkit';
// import Login from '../services/Api';

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.isLoading = true;
//       console.log('loginStart: ', state);
//     },
//     loginSuccess: (state, action) => {
//       state.user = action.payload.user;
//       state.isAuthenticated = true;
//       state.isLoading = false;
//       state.error = null;
//       console.log('loginSuccess: ', state);
//     },
//     loginFail: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       console.log('loginFail: ', state);
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFail } = authSlice.actions;

// export const loginUser = (email, password) => async (dispatch) => {
//   console.log('email: ', email);
//   console.log('password: ', password);
//   dispatch(loginStart());
//   try {
//     const response = await Login(email, password);
//     console.log('response: ', response);
//     dispatch(loginSuccess(response));
//   } catch (error) {
//     console.log('error: ', error);
//     dispatch(loginFail(error.message));
//   }
// };

// export default authSlice.reducer;

/////////////////////////////////////////

// export const login = createAsyncThunk(
//   'v1/user/login',
//   async ({ email, password }) => {
//     const response = await axios.post(`${DATABASE_URL}/v1/user/login`, {
//       email,
//       password,
//     });
//     return response.data;
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectUser = (state) => state.auth.user;

// export default authSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { url } from './api';
// import jwtDecode from 'jwt-decode';

// const initialState = {
//   token: localStorage.getItem('token'),
//   email: '',
//   password: '',
//   registerStatus: '',
//   registerError: '',
//   loginStatus: '',
//   loginError: '',
//   userLoaded: false,
// };

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (user, { rejectWithValue }) => {
//     try {
//       const token = await axios.post(`${url}/v1/user/login`, {
//         name: user.name,
//         email: user.email,
//         password: user.password,
//       });
//       localStorage.setItem('token', token.data);
//       return token.data;
//     } catch (err) {
//       console.log(err.response.data);
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(registerUser.pending, (state, action) => {
//       return { ...state, registerStatus: 'pending' };
//     });
//     builder.addCase(registerUser.fulfilled, (state, action) => {
//       if (action.payload) {
//         const user = jwtDecode(action.payload);
//         return {
//           ...state,
//           token: action.payload,
//           name: user.name,
//           email: user.email,
//           registerStatus: 'success',
//         };
//       } else return state;
//     });
//     builder.addCase(registerUser.rejected, (state, action) => {
//       return {
//         ...state,
//         registerStatus: 'rejected',
//         registerError: action.payload,
//       };
//     });
//   },
// });

// export default authSlice.reducer;
