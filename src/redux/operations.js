import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (args, thunkAPI) => {
    const { id } = args;
    const { token } = args;

    try {
      const response = await axios.delete(`users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (args, thunkAPI) => {
    const { token } = args;
    const { user } = args;
    try {
      const response = await axios.post('users', user, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
