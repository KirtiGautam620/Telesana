import styles from "./AppointmentCard.module.css";

export default function AppointmentCard({ data }) {
  return (
    <div className={styles.card}>
      <div>
        <h3>{data.doctor.doctor_name}</h3>
        <p>{data.doctor.specialisation}</p>
        <p><b>Patient:</b> {data.patient.fullName}</p>
        <p><b>Date:</b> {new Date(data.appointmentTime).toLocaleString()}</p>
      </div>

      <span className={styles[data.status.toLowerCase()]}>
        {data.status}
      </span>
    </div>
  );
}
