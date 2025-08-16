import { Route } from "react-router-dom";
import AuthLayout from "../auth/layouts/AuthLayout";
import LoginForm from "../auth/pages/LoginForm";
import SignupForm from "../auth/pages/SignupForm";

export const AuthRoutes = (
    <Route path="/auth" element={<AuthLayout/>}>
        <Route path="signup" element={<SignupForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
    </Route>
)