import React from 'react'
import Image from "next/image";

import styles from "./sidebar.module.css"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAnalytics,
  MdOutlineSettings,
  MdLogout,
  MdSchedule,
  MdHealthAndSafety,
  MdPeople,
} from "react-icons/md";

import DashboardLink from './dashboardLink/dashboardLink';

const dashboardItems = [
  {
    title: "User",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "User Profile",
        path: "/dashboard/userDetails",
        icon: <MdPeople />,
      },
      {
        title: "Appointments",
        path: "/dashboard/Appointments",
        icon: <MdSchedule />,
      },
     
    ],
  },
  
  {
    title: "Help",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Logout",
        path: "/dashboard/logout",
        icon: <MdLogout />,
      },
    ],
  },
];


const Sidebar = async () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
        </div>
      </div>
      <ul className={styles.list}>
        {dashboardItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <DashboardLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Sidebar