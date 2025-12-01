"use client";
import React, { useState } from 'react';
import styles from './notifications.module.css';
import { MdNotifications, MdCheckCircle, MdSchedule, MdHealthAndSafety, MdPerson } from 'react-icons/md';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'appointment',
      icon: <MdSchedule />,
      title: 'Upcoming Appointment',
      message: 'You have an appointment with Dr. Sarah Smith tomorrow at 10:00 AM',
      time: '2 hours ago',
      read: false,
      color: '#3b82f6'
    },
    {
      id: 2,
      type: 'reminder',
      icon: <MdHealthAndSafety />,
      title: 'Health Reminder',
      message: 'Time to take your prescribed medication - Aspirin 100mg',
      time: '5 hours ago',
      read: false,
      color: '#10b981'
    },
    {
      id: 3,
      type: 'message',
      icon: <MdPerson />,
      title: 'New Message from Dr. Johnson',
      message: 'Your lab results are ready. Please check your health records.',
      time: '1 day ago',
      read: true,
      color: '#6366f1'
    },
    {
      id: 4,
      type: 'appointment',
      icon: <MdCheckCircle />,
      title: 'Appointment Confirmed',
      message: 'Your appointment with Dr. Emily Chen has been confirmed for March 15, 2024',
      time: '2 days ago',
      read: true,
      color: '#16a34a'
    },
    {
      id: 5,
      type: 'reminder',
      icon: <MdHealthAndSafety />,
      title: 'Prescription Refill Due',
      message: 'Your prescription for Blood Pressure medication is due for refill',
      time: '3 days ago',
      read: true,
      color: '#f59e0b'
    },
    {
      id: 6,
      type: 'message',
      icon: <MdNotifications />,
      title: 'System Update',
      message: 'New features added: Now you can video call with your doctor directly',
      time: '1 week ago',
      read: true,
      color: '#8b5cf6'
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Notifications</h1>
          {unreadCount > 0 && (
            <span className={styles.badge}>{unreadCount} new</span>
          )}
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllAsRead} className={styles.markAllButton}>
            Mark all as read
          </button>
        )}
      </div>

      <div className={styles.notificationsList}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${styles.notificationCard} ${!notification.read ? styles.unread : ''}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div
              className={styles.iconContainer}
              style={{ backgroundColor: `${notification.color}15`, color: notification.color }}
            >
              {notification.icon}
            </div>
            <div className={styles.content}>
              <div className={styles.cardHeader}>
                <h3 className={styles.notificationTitle}>{notification.title}</h3>
                <span className={styles.time}>{notification.time}</span>
              </div>
              <p className={styles.message}>{notification.message}</p>
            </div>
            {!notification.read && (
              <div className={styles.unreadDot}></div>
            )}
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className={styles.emptyState}>
          <MdNotifications className={styles.emptyIcon} />
          <p>No notifications yet</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
