import Link from "next/link";

export default function Footer() {
    return <footer className="bg-white rounded-t-xl px-6 py-3 flex justify-between items-center">
    <div className="font-light">© HistoryLib - 2025</div>
    <Link href="/panel/auth/login" className="hover:text-black/60 transition duration-200 ease-in-out">Вход для сотрудников</Link>
  </footer>
}