import { Response } from "express"; // Important: correct type
import { EnvLoader } from "./envLoader";

export async function sendCookie( res: Response,token : string) {
  res.cookie("auth_token", token, {
    httpOnly: true,      // Prevent access from JS
    secure: true,        // Send only over HTTPS
    sameSite: "none",  // Protect against CSRF
    maxAge: 1000 * 60 * 60, 
    path:"/"
  });
}

export function clearCookie(res:Response){
  res.clearCookie('auth_token', {
    httpOnly: true,
    secure: true,   // only in production with HTTPS
    sameSite: "none" ,
    path:"/"

  });
}