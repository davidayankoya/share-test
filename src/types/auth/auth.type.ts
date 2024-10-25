import { UserResponse } from "./user.type";

export interface UserModel extends UserResponse {
    full_name: string;
} 

interface AuthToken {
    token: string;
    type: string;
}

export interface AuthCreds {
    email: string;
    password: string;
}

export interface ResetPasswordCreds {
    email: string;
}

export interface LoginResponse {
    status: string;
    message: string;
    authorization: AuthToken
    user: UserModel;
}

export interface AuthUserResponse {
    status: string;
    message: string;
    user: UserModel;
}
