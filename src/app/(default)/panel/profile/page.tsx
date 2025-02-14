'use client'
import ButtonUI from "@/ui/Button";
import Link from "next/link";


export default function ProfilePage() {
    return <div className="mt-10">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="font-bold text-3xl">Профиль</h1>
                <Link href={'/panel/profile/settings'}>Открыть настройки</Link>
            </div>
            <div>
                <ButtonUI text="Выйти" onClick={() => {if (typeof window !== 'undefined') {localStorage.removeItem('token'); window.location.href = '/'}}}/>
            </div>
        </div>
        <div className="mt-8">
            <h3 className="font-bold text-2xl">Добавленные герои</h3>
            <div className="space-y-1 mt-3">
                <div className="p-3 rounded-xl bg-white flex justify-between">
                    <div className="font-bold text-md">Карнаух Валерий Петрович</div>
                    <div className="text-md text-zinc-400">Открыть</div>
                </div>
                <div className="p-3 rounded-xl bg-white flex justify-between">
                    <div className="font-bold text-md">Карнаух Валерий Петрович</div>
                    <div className="text-md text-zinc-400">Открыть</div>
                </div>
            </div>
        </div>
    </div>
}