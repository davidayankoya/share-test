import * as Api from 'utils/api'
import { AuthUserResponse, LoginResponse, AuthCreds, ResetPasswordCreds } from 'types/auth/auth.type';


export class AuthService {
    static login = async (params: AuthCreds) => {
        return await Api.postReq<LoginResponse>(`/login`, params)
            .then(res => {
                return res.data
            })
            .catch(err => {
                throw err
            })
    };
    static fetchUser = async () => {
        return await Api.postReq<AuthUserResponse>(`/user`, {})
            .then(res => {
                return res.data
            })
            .catch(err => {
                throw err
            })
    };
    static resetPassword = async (params: ResetPasswordCreds) => {
        return await Api.postReq<AuthUserResponse>(`/user/forget-password`, params)
            .then(res => {
                return res.data
            })
            .catch(err => {
                throw err
            })
    };
    static logout = async () => {
        return await Api.postReq<any>(`/logout`, {})
            .then(res => {
                return res
            })
            .catch(err => {
                throw err
            })
    };
}


