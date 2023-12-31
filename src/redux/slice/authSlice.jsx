import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userId: null,

}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = true;
      const {email, userName, userId} = action.payload
      state.email = email
      state.userName = userName
      state.userId = userId
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.isLoggedout = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    },
  }
});

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectIsUserName = (state) => state.auth.userName
export const selectIsUserId = (state) => state.auth.userId

export default authSlice.reducer