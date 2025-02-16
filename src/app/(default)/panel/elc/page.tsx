'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function PageWait() {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    useEffect(() => {
        if (typeof window !== 'undefined' && token) {
            localStorage.setItem('token', token);
            window.location.href = '/';
        }
    }, [])

    return <div className="font-bold text-center text-2xl mt-32 flex flex-col justify-center items-center">
        Авторизация...
    </div>
}