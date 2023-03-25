import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, deleteUser, addUser } from 'redux/operations';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.rejected]: handleRejected,
    [deleteUser.pending]: handlePending,
    [deleteUser.rejected]: handleRejected,
    [addUser.pending]: handlePending,
    [addUser.rejected]: handleRejected,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    [deleteUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = state.users.filter(user => user.id !== action.payload.id);
    },
    [addUser.fulfilled](state, action) {
      state.users = [...state.users, action.payload];
    },
  },
});
