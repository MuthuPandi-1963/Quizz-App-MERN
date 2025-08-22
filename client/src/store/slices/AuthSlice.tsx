import { createSlice } from "@reduxjs/toolkit";
import { SignupThunk } from "../thunks/auth/SignupThunk";
import { LoginThunk } from "../thunks/auth/LoginThunk";
import { OTPThunk } from "../thunks/auth/OTPThunk";
import { VerifyUser } from "../thunks/auth/VerifyUser";

export interface AuthState {
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


const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.success = false;
  state.message = "";
}
const handleFulfilled = (state: AuthState, action: any) => {
  state.isLoading = false;
  state.success = true;
  state.message = action.payload?.message || "Signup successful";
  state.data = action.payload?.data || {};
  state.isVerified = action.payload.data?.is_verified || false;
}
const handleRejected = (state: AuthState, action: any) => {
  state.isLoading = false;
  state.success = false;
  state.message = action.error?.message || "Signup failed";
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(SignupThunk.pending, handlePending)
      .addCase(SignupThunk.fulfilled, handleFulfilled)
      .addCase(SignupThunk.rejected, handleRejected)
      .addCase(LoginThunk.pending, handlePending)
      .addCase(LoginThunk.fulfilled, handleFulfilled)
      .addCase(LoginThunk.rejected, handleRejected)
      .addCase(OTPThunk.pending, handlePending)
      .addCase(OTPThunk.fulfilled, handleFulfilled)
      .addCase(OTPThunk.rejected, handleRejected)
      .addCase(VerifyUser.pending, handlePending)
      .addCase(VerifyUser.fulfilled, handleFulfilled)
      .addCase(VerifyUser.rejected, handleRejected)
  },
});

export const AuthReducers = AuthSlice.reducer;
