'use client'
import { axiosClassic } from "@/api/interceptors"
import { IGetMe, ILoginResult } from "@/interfaces/Auth.interface"

class AuthService {
    private BASE_URL = '/auth/'

    async login(username: string, password: string): Promise<ILoginResult> {
        return <ILoginResult>(await axiosClassic.post(`${this.BASE_URL}login/`, {username, password})).data
    }

    async getMe(): Promise<IGetMe> {
        return <IGetMe>(await axiosClassic.get(`${this.BASE_URL}me/`)).data
    }
}

export default new AuthService()