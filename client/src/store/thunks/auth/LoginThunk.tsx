import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../../utils/AxiosInstance";
import type { LoginDataType } from "../../../components/interfaces/auth";



export const LoginThunk = createAsyncThunk("auth/login",
    async (formdata : LoginDataType ,{rejectWithValue})=>{
        try {
            const response = await AxiosInstance.post("/auth/login",formdata)
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
            
        }

    }
)