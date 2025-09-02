import jwt from 'jsonwebtoken';
import { EnvLoader } from './envLoader';
import { promisify } from 'util';

export function GenerateJWTToken(
    id: string,
    email: string = "",
    phone: string = ""
): string {
    const secretKey : string = EnvLoader('SECRET_KEY', 'string');
    if (!secretKey) {
        throw new Error("SECRET_KEY is not defined in environment variables");
    }

    // Promisified sign
    return jwt.sign({ id, email, phone }, secretKey, { expiresIn: '1h' }) as string;
}

export  function VerifyJWTToken(token: string): any {
    if (!token) {
        throw new Error("Token is missing");
    }

    const secretKey : string = EnvLoader('SECRET_KEY', 'string');
    if (!secretKey) {
        throw new Error("SECRET_KEY is not defined in environment variables");
    }

    try {
        // Promisified verify
        return jwt.verify(token, secretKey);
    } catch (err) {
        throw new Error("Token is invalid or expired");
    }
}
