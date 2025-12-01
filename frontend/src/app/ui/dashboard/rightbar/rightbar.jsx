'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './rightbar.module.css';
import { MdNotifications, MdEvent } from "react-icons/md";

const Rightbar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <Calendar 
            onChange={setDate} 
            value={date} 
            className={styles.calendar}
            locale="en-US"
        />
      </div>

      <div className={styles.item}>
        <h3 className={styles.title}>Reminders</h3>
        
        <div className={styles.notification}>
          <div className={styles.iconContainer} style={{ backgroundColor: '#f87171' }}>
             <MdNotifications />
          </div>
          <div className={styles.text}>
             <span className={styles.notifTitle}>Take Antibiotics</span>
             <span className={styles.notifTime}>After Lunch (2:00 PM)</span>
          </div>
        </div>

        <div className={styles.notification}>
          <div className={styles.iconContainer} style={{ backgroundColor: '#337af5' }}>
             <MdEvent />
          </div>
          <div className={styles.text}>
             <span className={styles.notifTitle}>Book Follow-up</span>
             <span className={styles.notifTime}>Before Friday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;