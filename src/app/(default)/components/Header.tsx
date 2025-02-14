'use client'
import Link from "next/link";

export default function Header() {
    return <header className="bg-white rounded-b-xl px-6 py-3 flex justify-between items-center">
    <Link href="/" className="font-medium text-lg flex items-center">
        <img src="/logo.svg" alt="LOGO" className="h-10 w-10 duration-150 hover:opacity-90 active:scale-90"/>
        <div className="ml-2">HistoryLib</div>
    </Link>
    <div className="flex  gap-3">
      <Link href="/" className="hover:text-black/60 transition duration-200 ease-in-out">Книга</Link>
      <Link href="/" className="hover:text-black/60 transition duration-200 ease-in-out">Информация</Link>
      {typeof window !== 'undefined' && localStorage.getItem('token') ?
        <Link href="/panel/profile" className="font-bold hover:font-bold text-indigo-600 transition duration-200 ease-in-out">Мой профиль</Link> :
        <Link href="/auth/login" className="font-bold hover:font-bold text-indigo-600 transition duration-200 ease-in-out">Авторизация</Link>
      }
    </div>
  </header>
}