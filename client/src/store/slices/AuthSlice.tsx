import { createSlice } from "@reduxjs/toolkit";
import { SignupThunk } from "../thunks/auth/SignupThunk";
// import { message } from "antd";

interface AuthState {
  isLoading: boolean;
  isVerified: boolean;
  success: boolean;
  message: string;
  data: any;
}

const initialState: AuthState = {
  isLoading: false,
  isVerified: false,
  success: false,
  message: "",
  data: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(SignupThunk.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.message = "";
      })
      .addCase(SignupThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload?.message || "Signup successful";
        state.data = action.payload?.data || {};
        // message.success(state.message);
        
      })
      .addCase(SignupThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.message = action.error?.message || "Signup failed";
        // message.error(state.message);
      });
  },
});

export const AuthReducers = AuthSlice.reducer;
