'use client'
import authService from "@/services/auth.service";
import ButtonUI from "@/ui/Button";
import { useQuery } from "@tanstack/react-query";

export default function ProfilePage() {
    const {data} = useQuery({queryKey: ['getMe'], queryFn: () => authService.getMe()})

    if (!data) return <>Loading...</>

    return <div className="mt-10">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="font-bold text-3xl">Профиль</h1>
            </div>
            <div>
                <ButtonUI text="Выйти" onClick={() => {if (typeof window !== 'undefined') {localStorage.removeItem('token'); window.location.href = '/'}}}/>
            </div>
        </div>
        <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200 mt-8">
            <h3 className="font-bold text-2xl">Информация</h3>
            <div className="mt-1">
                <div className="flex space-x-2">
                    <div className="font-bold">Юзернейм:</div>
                    <div className="font-medium">{data.username}</div>
                </div>
                {data.code_etc && <div className="flex space-x-2">
                    <div className="font-bold">ID ETC:</div>
                    <div className="font-medium">{data.code_etc}</div>
                </div>}
                {data.phone && <div className="flex space-x-2">
                    <div className="font-bold">Телефон:</div>
                    <div className="font-medium">{data.phone}</div>
                </div>}
            </div>
        </div>
    </div>
}