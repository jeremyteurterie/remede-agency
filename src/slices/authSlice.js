import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/api';

// get user from localStorage
const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  token: token ? token : null,
  firstName: null,
  lastName: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// login user
export const login = createAsyncThunk('auth/login', async (token, thunkAPI) => {
  try {
    return await authService.login(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// // update profil
// export const profil = createAsyncThunk(
//   'auth/profil',
//   async (userData, thunkAPI) => {
//     try {
//       await authService.updateProfile(userData);
//       const updatedUser = await authService.getUser(); // Ajouter cette ligne pour récupérer les nouvelles informations de l'utilisateur
//       return updatedUser;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// logout
export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout();
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
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
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
        state.token = action.payload;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
        state.firstName = null;
        state.lastName = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(profil.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      });
  },
});

export const { reset, setFirstName, setLastName } = authSlice.actions;
export default authSlice.reducer;
