// "use client";
// import Image from "next/image";
// import doctorsImg from "../../../public/home.png";
// import Link from "next/link";
// import "../home/HomePage.css";




// export default function Dashboard() {
//   return (
//     <section className="home-section">
//       <div className="home-container">
//         <div className="left-content">
//           {/* <span className="badge">Healthcare made simple</span> */}
//           <h1 className="title">
//             Connect with <br />
//             doctors <br />
//             <span className="highlight">anytime, anywhere</span>
//           </h1>

//           <p className="description">
//             Book appointments, consult via video, and manage your healthcare
//             journey all in one secure platform.
//           </p>

//           <div className="buttons">
//             <Link href="/signup" className="button-primary">
//               Get Started
//             </Link>

//             <button className="button-secondary">
//               Find Doctors
//             </button>
//           </div>
//         </div>

//         <div className="right-content">
//           <Image
//             src={doctorsImg}
//             alt="Doctors"
//             width={660}
//             height={450}
//             className="image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }






// import Card from "../ui/dashboard/card/card";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";
// import Upcoming from "../ui/dashboard/upcoming/upcoming";
// import styles from "../ui/dashboard/dashboard.module.css";

// import { MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdMonitorHeart, MdMonitorWeight, MdBloodtype } from "react-icons/md";

// // Mock data for cards
// const cards = [
//   {
//     id: 1,
//     title: "Health Rate",
//     value: "10,928",
//     change: { value: "12%", status: "more than previous week", isPositive: true },
//     icon: <MdMonitorHeart size={24} />,
//   },
//   {
//     id: 2,
//     title: "Blood Pressure",
//     value: "120/80 mmHg",
//     change: { value: "Last Checked 2 days ago", isPositive: false },
//     icon: <MdBloodtype size={24} />,
//   },
//   {
//     id: 3,
//     title: "Weight",
//     value: "$6,642",
//     change: { value: "18%", status: "more than previous week", isPositive: true },
//     icon: <MdMonitorWeight size={24} />,
//   },
// ];

// const Dashboard = () => {
//   return (
//     <div className={styles.wrapper}>
     
//       <div className={styles.main}>
//         <div className={styles.cards}>
//           {cards.map((item) => (
//             <Card item={item} key={item.id} />
//           ))}
//         </div>
//         <Upcoming />
//       </div>

 
//       <div className={styles.side}>
//         <Rightbar />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Upcoming from "../ui/dashboard/upcoming/upcoming";
import styles from "../ui/dashboard/dashboard.module.css";

// Icons for the Health Diary
import { MdFavorite, MdNightlightRound, MdWaterDrop } from "react-icons/md";
import Prescriptions from "../ui/dashboard/prescription/prescription";

const Dashboard = () => {
  // PERSONAL HEALTH DIARY METRICS
  const cards = [
    {
      title: "Heart Rate",
      value: "72 bpm",
      icon: <MdFavorite size={24} />,
      change: {
        value: "+2%",
        isPositive: true,
        status: "(Normal)",
      },
    },
    {
      title: "Blood Glucose",
      value: "95 mg/dL",
      icon: <MdWaterDrop size={24} />, // Drop icon for blood/sugar
      change: {
        value: "-5%",
        isPositive: true, // Lower sugar is usually good
        status: "(Fasting)",
      },
    },
    {
      title: "Sleep Duration",
      value: "7h 30m",
      icon: <MdNightlightRound size={24} />,
      change: {
        value: "+45m",
        isPositive: true,
        status: "vs yesterday",
      },
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* LEFT SIDE: Main Content */}
      <div className={styles.main}>
        
        {/* 1. Top Cards Row */}
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </div>

        {/* 2. Upcoming Appointments (The component we made earlier) */}
        <Upcoming />

        {/* 3. Active Prescriptions (Placeholder for the bottom section) */}
        <Prescriptions/>


      </div>

      {/* RIGHT SIDE: Calendar & Reminders */}
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;