'use client'
import useIsAuth from "@/lib/useIsAuth";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'


export default function Header() {
  const is_auth = useIsAuth()

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

    return <footer>
    {is_auth && <div className="bg-indigo-600 p-1 text-center font-bold text-white">Вы авторизованы как сотрудник <button onClick={logout} className="ml-2 bg-white text-black hover:text-white hover:bg-black px-2 rounded-md">Выйти</button></div>}
    <div className="bg-white rounded-b-xl px-6 py-3 flex justify-between items-center">
    <Link href="/" className="font-medium text-lg flex items-center">
        <img src="/logo.svg" alt="LOGO" className="h-10 w-10 duration-150 hover:opacity-90 active:scale-90"/>
        <div className="ml-2">HistoryLib</div>
    </Link>
    <div className="gap-3 hidden md:flex">
      {is_auth && <>
        <Link href="/panel/profile" className="hover:text-black/60 transition duration-200 ease-in-out">Профиль</Link>
      </>}
      <Link href="/filter" className="hover:text-black/60 transition duration-200 ease-in-out">Фильтр</Link>
      <Link href="/sender" className="hover:text-black/60 transition duration-200 ease-in-out">Направить информацию</Link>
      <Link href="/map" className="font-bold hover:font-bold text-indigo-600 transition duration-200 ease-in-out">Открыть карту</Link>
    </div>
    <div className="flex md:hidden">
      <Popover className="group">
      <PopoverButton className="flex items-center gap-2">
        <button className="font-bold hover:font-bold text-indigo-600 transition duration-200 ease-in-out">Меню</button>
      </PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col bg-white/90 backdrop-blur-xl rounded-xl p-4 w-screen z-50 ring-2 ring-black/10">
        <Link href="/filter" className="hover:text-black/60 transition duration-200 ease-in-out">Фильтр</Link>
        <Link href="/sender" className="hover:text-black/60 transition duration-200 ease-in-out">Направить информацию</Link>
        <Link href="/map" className="font-bold hover:font-bold text-indigo-600 transition duration-200 ease-in-out">Открыть карту</Link>
      </PopoverPanel>
    </Popover>
    </div>
  </div>
  </footer>
}