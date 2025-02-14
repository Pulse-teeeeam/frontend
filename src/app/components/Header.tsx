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
      <Link href="/" className="font-bold hover:font-bold text-indigo-600 transition duration-200 ease-in-out">Добавить героя</Link>
    </div>
  </header>
}