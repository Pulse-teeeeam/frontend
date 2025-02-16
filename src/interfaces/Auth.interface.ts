export interface ILoginResult {
    token?: string
    detail?: string
}

export interface IGetMe {
    username: string,
    id: number,
    code_etc: number | null,
    phone: string | null
}