"use client";

import { useState, useEffect } from "react";
import { apiGet, apiPost } from "../../api/utils.js";
import styles from "./BookForm.module.css";

export default function BookAppointmentForm({ onSuccess }) {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [form, setForm] = useState({
   
    fullName: "", 
    department: "",
    doctorId: "",
    appointmentTime: "",
    mode: "IN_PERSON"
  });

  useEffect(() => {
    async function load() {
      const docs = await apiGet("/api/doctor");
      setDoctors(docs);
      setDepartments([...new Set(docs.map(d => d.specialisation))]);
    }
    load();
  }, []);

  useEffect(() => {
    setFiltered(doctors.filter(d => d.specialisation === form.department));
  }, [form.department, doctors]);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    const res = await apiPost("/api/appointment", {
      userId,
      doctorId: form.doctorId,
      appointmentTime: form.appointmentTime,
      mode: form.mode
    });

    if (res.error) alert(res.error);
    else {
      alert("Appointment booked!");
      onSuccess();
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      

      <label>Full Name (Person Name)</label>
      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handle}
        placeholder="Enter your full name"
        required
      />

      <label>Department</label>
      <select name="department" onChange={handle} required>
        <option value="">Select</option>
        {departments.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <label>Doctor</label>
      <select name="doctorId" onChange={handle} required>
        <option value="">Select doctor</option>
        {filtered.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.doctor_name}
          </option>
        ))}
      </select>

      <label>Date & Time</label>
      <input
        type="datetime-local"
        name="appointmentTime"
        onChange={handle}
        required
      />

      <label>Mode (In Person / Video)</label>
      <select name="mode" onChange={handle}>
        <option value="IN_PERSON">In Person</option>
        <option value="VIDEO">Video</option>
      </select>

      <button
        type="submit"
        style={{
          background: "#4A74F5",
          border: "none",
          padding: "10px 16px",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Book Now
      </button>
    </form>
  );
}