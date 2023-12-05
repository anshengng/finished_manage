import { http } from "@/plugins/axios";
export interface User {
    name?: string
    age?: number
    avator?: string
    permissions?: string[]
}
export interface loginRes {
    token: string
}
export interface loginRef {
    name: string
    password: string
    captcha: {
        key: string
        value: string
    }
}
export async function userinfo() {
    return {
        data: {
            username: 'jizhu',
            avator: '2'
        }
    };
    return http.request<User>({
        url: `/user/current`
    })
}


export async function login(data: loginRef) {
    return http.request<loginRes>({
        url: `/auth/login`,
        method: 'post',
        data
    })
}

export async function getCaptcha() {
    return http.request({
        url: `/captcha`,
    })
}

export async function register(data: any) {
    return http.request({
        url: `/auth/register`,
        method: 'post',
        data
    })
}