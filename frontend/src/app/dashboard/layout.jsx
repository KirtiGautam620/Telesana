"use client";
import React from 'react'
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Chatbot from "../../components/Chatbot";
import styles from "../ui/dashboard/dashboard.module.css"

const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
        </div>
        <Chatbot />
    </div>
  )
}

export default layout



