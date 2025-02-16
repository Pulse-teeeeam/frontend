'use client'
import axios, { AxiosError, type CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BASE_SERVER_URL_API_PUBLIC,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
}

export const axiosClassic = axios.create(options)

axiosClassic.interceptors.request.use(async config => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Token ${token}`
        }
    }
    return config
})