import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`admin/register`, credentials);
      token.set(response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`admin/login`, credentials);
      token.set(response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'admin/auth/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post(`admin/logout`);
      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const persistedToken = thunkAPI.getState().auth.token;
//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue();
//   } else {
//     token.set(persistedToken);
//     try {
//       const response = await axios.get('admin/current');
//       return response.data;
//     } catch (e) {
//       thunkAPI.rejectWithValue(e.message);
//     }
//   }
// });
