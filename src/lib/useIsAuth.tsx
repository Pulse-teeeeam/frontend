import { useEffect, useState } from 'react';

const useIsAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            setIsAuth(!!token);
        }
    }, []);

    return isAuth;
};

export default useIsAuth;