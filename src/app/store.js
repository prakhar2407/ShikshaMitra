import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../hooks/authSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});
