"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "../ui/dashboard/sidebar/sidebar"; 
import Navbar from "../ui/dashboard/navbar/navbar";   
import Chatbot from "../../components/Chatbot";       
import styles from "../ui/dashboard/dashboard.module.css"; 

const Layout = ({ children }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);
  if (!isAuthorized) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Verifying access...</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
      <Chatbot />
    </div>
  );
};

export default Layout;