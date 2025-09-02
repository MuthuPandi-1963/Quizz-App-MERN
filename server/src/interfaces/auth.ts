export type Provider = "normal" | "google" | "github"

export interface Auth{
    username? : string,
    email? : string | null,
    phone? : string | null,
    password : string,
    is_active? : boolean,
    is_verified? : boolean,
    id :string,
    created_at : Date,
    updated_at : Date,
}

export interface OTPDataType{
    email? :string,
    phone? : string,
    id : string,
    otp : string,
}

export interface AuthenticationRequest extends Request{
    cookies : {[key:string] : string}
}

export interface SignupData {
    email : string,
    name : string,
    password : string
}