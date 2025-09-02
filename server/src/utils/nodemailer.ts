import { createTransport } from "nodemailer";

export function nodemailerTransport(user,pass){
    return createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      }
    });
}