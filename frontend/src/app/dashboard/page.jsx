import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Upcoming from "../ui/dashboard/upcoming/upcoming";
import styles from "../ui/dashboard/dashboard.module.css";


import { MdFavorite, MdNightlightRound, MdWaterDrop } from "react-icons/md";
import Prescriptions from "../ui/dashboard/prescription/prescription";

const Dashboard = () => {
  
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
      icon: <MdWaterDrop size={24} />, 
      change: {
        value: "-5%",
        isPositive: true, 
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

      <div className={styles.main}>

        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </div>

        <Upcoming />

        <Prescriptions/>


      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;