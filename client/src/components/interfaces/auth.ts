export interface SignupDataType {
    full_name: string,
    email?: string,
    phone?: string,
    password: string
}

export interface LoginDataType {
    username?: string,
    email?: string,
    phone?: string,
    password: string
}

export interface OTPDataType {
    id : string,
    otp : string,
    email?: string,
    phone?: string,
}