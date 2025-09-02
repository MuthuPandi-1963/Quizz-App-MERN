import { Auth } from "@prisma/client";
import { prisma } from "../../config/prisma.config";
import { APIResponse, Responser } from "../../interfaces/http";
import { generateUniqueUsername } from "../../utils/generateUsername";
import { hashPassword } from "../../utils/hashPassword";
import { Response } from "express";

export const Signup = async (req :Request ,res: Response): Promise<APIResponse<Partial<Auth>>> => {

    const { name, email, password } = req.body;
    if (!email ) {
      return Responser(false, "Email or phone number is required for Signup", {});
    }
    const checkEmailOrPhone = await prisma.auth.findMany({
      where: {
        OR: [
          { email: email },
        ]
      },
      select: {
        id: true,
        email: true,
        phone: true,
        username: true
      }
    })

    if (checkEmailOrPhone.length > 0) {
      return Responser(false, "email or username or phone number already  exists", {})
    }
    const hashedPassword: string = await hashPassword(password);

    let username: string;

    if (email) {
      // take everything before '@'
      username = email.split('@')[0];
    } else {
      const user = await prisma.auth.findFirst({
        where: { username: name || "" }
      });
      username = user ? await generateUniqueUsername(name || "") : name ?? "";
    }

    const userData = {
      password: hashedPassword,
      username,
      ...(email ? { email } : {}),
    };
    const newUser = await prisma.auth.create({
      data: { ...userData, provider: 'normal' }
    });
    const createProfile = await prisma.profile.create({
      data: {
        full_name: name || "",
        user_id: newUser.id
      }
    })
    
    const roleId = (await prisma.roles.findFirst({
  where: { name: "student" },
}))?.id;

const SetRole = await prisma.userRole.create({
  data: {
    user_id: newUser.id,
    role_id: roleId!, // use `!` only if you’re 100% sure
  },
});

    const { password: pwd, ...newUserData } = newUser;
    
    return Responser(true, 'User signed up successfully', { ...newUserData });
  }