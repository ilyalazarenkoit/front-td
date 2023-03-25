export const selectUsers = state => state.users.users;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectFilter = state => state.filter;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.admin.email;
export const selectToken = state => state.auth.token;
