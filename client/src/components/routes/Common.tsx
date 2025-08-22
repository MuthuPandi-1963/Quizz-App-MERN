import { Route } from "react-router-dom";
import Layout from "../common/Layout";
import LandingPage from "../common/LandingPage";
import { AuthRoutes } from "./Auth";

export const CommonRoutes = (
    <Route path="" element={<Layout/>} >
        <Route index element={<LandingPage/>}/>
        {AuthRoutes}
    </Route>
)