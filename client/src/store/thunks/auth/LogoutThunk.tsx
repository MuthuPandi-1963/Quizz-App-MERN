import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../../utils/AxiosInstance";



export const LogoutThunk = createAsyncThunk("auth/logout",
    async (_ ,{rejectWithValue})=>{
        try {
            const response = await AxiosInstance.get("/auth/logout")
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
            
        }

    }
)