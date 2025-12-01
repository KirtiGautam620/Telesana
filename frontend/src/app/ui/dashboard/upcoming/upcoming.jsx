import styles from "./upcoming.module.css";
import Image from "next/image";

const Upcoming = ({ appointments = [] }) => {
  const upcomingAppointments = appointments
    .filter(apt => apt.status === 'SCHEDULED')
    .slice(0, 5);

  if (upcomingAppointments.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Upcoming Appointments</h2>
        <p className={styles.noData}>No upcoming appointments</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upcoming Appointments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>Date</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((apt) => (
            <tr key={apt.id}>
              <td>
                <div className={styles.doctor}>
                  <Image
                    src="/noavatar.png"
                    alt={apt.doctor.doctor_name}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  <div className={styles.doctorDetails}>
                    <span className={styles.doctorName}>
                      {apt.doctor.doctor_name}
                    </span>
                  </div>
                </div>
              </td>
              <td className={styles.type}>{apt.doctor.specialisation}</td>
              <td className={styles.date}>
                {new Date(apt.appointmentTime).toLocaleString()}
              </td>
              <td>
                <span className={`${styles.status} ${styles.confirmed}`}>
                  {apt.mode.replace('_', ' ')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upcoming;