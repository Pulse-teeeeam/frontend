import Link from "next/link";

export default function ProfilePage() {
    return <div className="mt-10">
        <div>
            <h1 className="font-bold text-3xl">Настройки профиля</h1>
            <Link href={'/panel/profile'}>Открыть профиль</Link>
        </div>
        
    </div>
}