import { Route } from "react-router-dom";
import React from "react";

const AuthLayout = React.lazy(()=>import ("../auth/layouts/AuthLayout"))
const SignupForm = React.lazy(()=>import ("../auth/pages/SignupForm"))
const LoginForm = React.lazy(()=>import ("../auth/pages/LoginForm"))
const OTPVerification = React.lazy(()=>import ("../auth/pages/OTPVerification"))
const ResetPassword = React.lazy(()=>import ("../auth/pages/ResetPassword"))
export const AuthRoutes = (
    <Route path="/auth" element={<AuthLayout/>}>
        <Route path="signup" element={<SignupForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="otp" element={<OTPVerification/>}/>
        <Route path="reset_password" element={<ResetPassword/>}/>
    </Route>
)