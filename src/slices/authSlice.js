import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/api';

// get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

// export function login(data) {
//   return axios.post(`${API_URL}/login`, data);
// }

// export function getCurrentUser() {
//   try {
//     const token = localStorage.getItem('token');
//     return jwtDecode(token);
//   } catch (error) {
//     return null;
//   }
// }

// export function logout() {
//   localStorage.removeItem('token');
// }

// const initialState = {
//   token: localStorage.getItem('token'),
//   email: '',
//   password: '',
//   firstName: '',
//   lastName: '',
//   loginStatus: '',
//   loginError: '',
//   userLoaded: false,
// };

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (user, { rejectedWithValue }) => {
//     try {
//       const token = await axios.post(`${API_URL}/login`, {
//         email: user.email,
//         password: user.password,
//       });
//       localStorage.setItem('token', token.data);
//       return token.data;
//     } catch (error) {
//       console.log(error.response.data);
//       return rejectedWithValue(error.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loadUser(state, action) {
//       const token = state.token;
//       console.log(token);
//       if (token) {
//         try {
//           const user = jwtDecode(token);
//           return {
//             ...state,
//             token,
//             email: user.email,
//             password: user.password,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             userLoaded: true,
//           };
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     },
//     logoutUser(state, action) {
//       localStorage.removeItem('token');
//       return {
//         ...state,
//         token: '',
//         email: '',
//         password: '',
//         firstName: '',
//         lastName: '',
//         loginStatus: '',
//         loginError: '',
//         userLoaded: false,
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.pending, (state, action) => {
//       return { ...state, loginStatus: 'pending' };
//     });
//     builder.addCase(loginUser.fulfilled, (state, action) => {
//       if (action.payload) {
//         const user = jwtDecode(action.payload);
//         return {
//           ...state,
//           token: action.payload,
//           email: user.email,
//           password: user.password,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           loginStatus: 'success',
//         };
//       } else return state;
//     });
//     builder.addCase(loginUser.rejected, (state, action) => {
//       return {
//         ...state,
//         loginStatus: 'rejected',
//         loginError: action.payload,
//       };
//     });
//   },
// });

// export const { loadUser, logoutUser } = authSlice.actions;
// export default authSlice.reducer;

// const Login = (email, password) => {
//   // set configurations
//   const configuration = {
//     method: 'post',
//     url: `${API_URL}/login`,
//     data: {
//       email,
//       password,
//     },
//   };
//   // make the API call
//   axios(configuration)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export default Login;

// export const LoginService = createAsyncThunk(
//   'user/login',
//   async ({ email, password, remember }, { rejectWithValue }) => {
//     try {
//       const axiosRequest = axios.create({
//         baseURL: API_URL,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const datas = await axiosRequest.post('/user/login', {
//         email: email,
//         password: password,
//       });

//       if (remember === true) {
//         localStorage.setItem('userToken', datas.data.body.token);
//       } else {
//         localStorage.clear();
//       }

//       return datas.data;
//     } catch (error) {
//       console.log(
//         error.response.data.status + ' ' + error.response.data.message
//       );

//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const Login = async () => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const LogoutService = () => {
//   localStorage.removeItem('userToken');
// };

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoggedIn: false,
//   currentUser: null,
//   errorMessage: '',
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.currentUser = action.payload;
//       state.errorMessage = '';
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.currentUser = null;
//       state.errorMessage = '';
//     },
//     setError: (state, action) => {
//       state.errorMessage = action.payload;
//     },
//   },
// });

// export const { login, logout, setError } = authSlice.actions;

// export default authSlice.reducer;

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
//   loginStatus: '',
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
