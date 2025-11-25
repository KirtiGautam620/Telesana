import styles from "./upcoming.module.css";
import Image from "next/image";

// --- SIMULATING DATABASE FETCH ---
// In a real app, you would import 'prisma' here
const fetchAppointments = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return mock data that matches your DB schema
  return [
    {
      id: 1,
      doctorName: "Dr. Sarah Smith",
      specialty: "Cardiology",
      avatar: "/noavatar.png", // Make sure this image exists in your /public folder
      type: "Cardiology",
      date: "Nov 28, 10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctorName: "Dr. John Doe",
      specialty: "Dentist",
      avatar: "/noavatar.png",
      type: "Checkup",
      date: "Dec 05, 02:30 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Blunt",
      specialty: "Neurology",
      avatar: "/noavatar.png",
      type: "Consultation",
      date: "Dec 12, 11:00 AM",
      status: "Cancelled",
    },
  ];
};

const Upcoming = async () => {
  // Fetch data directly in the component (Server Component feature)
  const appointments = await fetchAppointments();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upcoming Appointments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((apt) => (
            <tr key={apt.id}>
              {/* Column 1: Doctor Info */}
              <td>
                <div className={styles.doctor}>
                  <Image
                    src={apt.avatar}
                    alt={apt.doctorName}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  <div className={styles.doctorDetails}>
                    <span className={styles.doctorName}>{apt.doctorName}</span>
                    <span className={styles.doctorSpecialtySmall}>
                      ({apt.specialty})
                    </span>
                  </div>
                </div>
              </td>

              {/* Column 2: Type */}
              <td className={styles.type}>{apt.type}</td>

              {/* Column 3: Date */}
              <td className={styles.date}>{apt.date}</td>

              {/* Column 4: Status Badge */}
              <td>
                <span
                  className={`${styles.status} ${
                    styles[apt.status.toLowerCase()]
                  }`}
                >
                  {apt.status}
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