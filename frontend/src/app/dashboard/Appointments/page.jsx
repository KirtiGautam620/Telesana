"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../api/utils.js";
import Modal from "../../../components/Modal"; 
import AppointmentCard from "./AppointmentCard";
import BookAppointmentForm from "./BookAppointmentForm";

export default function AppointmentsPage() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  async function load() {
    try {
      const userId = localStorage.getItem("userId");
      const data = await apiGet(`/api/appointment/${userId}`);
      
      if (Array.isArray(data)) {
        setList(data);
      } else {
        console.error("API response was not an array:", data);
        setList([]); 
      }
      
    } catch (error) {
      console.error("Failed to load appointments:", error);
      setList([]); 
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1>Appointments</h1>

        <button
          onClick={() => setOpen(true)}
          style={{
            background: "#4A74F5",
            border: "none",
            padding: "10px 16px",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Book Now
        </button>
      </div>

      {list.length === 0 && <p>No appointments yet.</p>}

      {list.map((item) => (
        <AppointmentCard key={item.id} data={item} />
      ))}

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 style={{ marginBottom: "12px" }}>Book Appointment</h2>
        <BookAppointmentForm
          onSuccess={() => {
            setOpen(false);
            load();
          }}
        />
      </Modal>
    </div>
  );
}

