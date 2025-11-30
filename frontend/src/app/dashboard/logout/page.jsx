"use client";
import React, { useEffect } from 'react';
import {useRouter} from 'next/navigation';

const LogoutPage = () => {
    const router=useRouter();
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        const timer=setTimeout(() => {
            router.push('/login');
        }, 2000);
        return ()=>clearTimeout(timer);
    }, [router]);

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column'}}>
            <h1>You have been logged out</h1>
            <p>Redirecting to login page...</p>
        </div>
    );
};

export default LogoutPage;
