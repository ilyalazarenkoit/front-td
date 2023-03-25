import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut } from 'redux/authOperations';

let initialState = {
  admin: { email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

export const adminSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.admin.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
    },
    [logOut.pending](state) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.admin = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected](state) {
      state.isLoading = false;
    },
    // [refresh.pending](state) {
    //   state.isLoading = true;
    // },
    // [refresh.fulfilled](state, action) {
    //   state.admin = action.payload;
    //   state.isLoggedIn = true;
    //   state.isLoading = false;
    // },
    // [refresh.rejected](state) {
    //   state.isLoading = false;
    // },
  },
});
