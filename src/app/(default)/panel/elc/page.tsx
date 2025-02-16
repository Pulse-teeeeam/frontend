'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

function PageAuthTokenContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        if (typeof window !== 'undefined' && token) {
            localStorage.setItem('token', token);
            window.location.href = '/';
        }
    }, [token]);

    return <div className="font-bold text-center text-2xl mt-32 flex flex-col justify-center items-center">
        Авторизация...
    </div>
}

export default function PageAuthToken() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <PageAuthTokenContent />
        </Suspense>
    );
}
