"use client";
import React, { useRef } from "react";
import "./profile.css";
import PersonalDetails from "./components/PersonalDetails.js";
import HealthSummary from "./components/HealthSummary";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const detailsRef = useRef(null);
  const healthRef = useRef(null);
  const pastAppointmentsRef = useRef(null);
  const router = useRouter();

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  const gender = "female";
  const profileImage = gender === "male" ? "images/male-profile.png" : "images/female-profile.png";

  return (
    <div className="profile-container">
      
      <div className="sidebar">
        <div className="user-info">
          <img src={profileImage} className="profile-photo" />
          <h1>Jane Doe</h1>
          <p>jane.doe@example.com</p>
        </div>

        <div className="navigators">
          <button onClick={() => scrollTo(detailsRef)}>Personal Details</button>
          <button onClick={() => scrollTo(healthRef)}>Health Summary</button>
          <button onClick={() => router.push("./")}>Back to Dashboard</button>
        </div>
      </div>

      <div className="content">
        <section ref={detailsRef}>
          <PersonalDetails />
        </section>

        <section ref={healthRef}>
          <HealthSummary />
        </section>
      </div>
    </div>
  );
}
