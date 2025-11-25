// // import Card from "../ui/dashboard/card/card";
// // import Rightbar from "../ui/dashboard/rightbar/rightbar";
// // import Upcoming from "../ui/dashboard/upcoming/upcoming";
// // import styles from "../ui/dashboard/dashboard.module.css";

// import { MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney } from "react-icons/md";


// // Mock data for cards
// const cards = [
//   {
//     id: 1,
//     title: "Total Patients",
//     value: "10,928",
//     change: { value: "12%", status: "more than previous week", isPositive: true },
//     icon: <MdSupervisedUserCircle size={24} />,
//   },
//   {
//     id: 2,
//     title: "Appointments",
//     value: "8,236",
//     change: { value: "2%", status: "less than previous week", isPositive: false },
//     icon: <MdShoppingBag size={24} />,
//   },
//   {
//     id: 3,
//     title: "Total Earnings",
//     value: "$6,642",
//     change: { value: "18%", status: "more than previous week", isPositive: true },
//     icon: <MdAttachMoney size={24} />,
//   },
// ];

// const Dashboard = () => {
//   return (
//     <div className={styles.wrapper}>
//       {/* Main Content: Cards & Upcoming Table */}
//       <div className={styles.main}>
//         <div className={styles.cards}>
//           {cards.map((item) => (
//             <Card item={item} key={item.id} />
//           ))}
//         </div>
//         <Upcoming />
//       </div>

//       {/* Right Sidebar: Calendar & Notifications */}
//       <div className={styles.side}>
//         <Rightbar />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;