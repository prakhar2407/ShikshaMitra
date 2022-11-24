import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    emailId: null,
    jwtToken: null,
    refreshToken: null,
    role: null,
    type: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { emailId, jwtToken, refreshToken, role, type } = action.payload;
      state.emailId = emailId;
      state.jwtToken = jwtToken;
      state.refreshToken = refreshToken;
      state.role = role;
      state.type = type;
    },

    logout: (state, action) => {
      state.emailId = null;
      state.jwtToken = null;
      state.refreshToken = null;
      state.role = null;
      state.type = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserEmail = (state) => state.auth.emailId;
export const selectCurrentToken = (state) => state.auth.token;
