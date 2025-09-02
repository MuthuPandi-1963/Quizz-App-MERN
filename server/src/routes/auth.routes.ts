import { Router } from "express";
import { Signup } from "../controllers/auth/signup";


export const AuthRoutes = Router();

AuthRoutes.post("/signup",(req,res)=>Signup(req,res))