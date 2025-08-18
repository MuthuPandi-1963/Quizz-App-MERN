import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../../utils/AxiosInstance";
import type { signupDataType } from "../../../components/interfaces/auth";

export const SignupThunk = createAsyncThunk("auth/signup",
    async (formdata :signupDataType ,{rejectWithValue})=>{
        try {
            const response = await AxiosInstance.post("/auth/signup",formdata)
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
            
        }

    }
)