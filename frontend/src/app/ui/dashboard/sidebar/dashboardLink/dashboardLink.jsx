"use client"

import Link from 'next/link'
import styles from './dashboardLink.module.css'
import { usePathname } from 'next/navigation'

const DashboardLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default DashboardLink