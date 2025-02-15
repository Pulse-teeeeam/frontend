import axios, { AxiosError, type CreateAxiosDefaults } from "axios";


const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BASE_SERVER_URL_API_PUBLIC,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

export { axiosClassic, axiosWithAuth }