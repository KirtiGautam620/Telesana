"use client";
import React, { useState, useEffect } from 'react';
import styles from './appointments.module.css';
import toast from 'react-hot-toast';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    doctorId: '',
    mode: 'VIDEO',
    appointmentTime: ''
  });

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/api/appointments', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/api/doctors', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!formData.doctorId || !formData.appointmentTime) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setShowBookingForm(false);
        setFormData({ doctorId: '', mode: 'VIDEO', appointmentTime: '' });
        fetchAppointments();
      } else {
        toast.error(data.message || 'Failed to book appointment');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'SCHEDULED':
        return '#16a34a';
      case 'COMPLETED':
        return '#337af5';
      case 'CANCELLED':
        return '#ef4444';
      default:
        return '#94979c';
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Appointments</h1>
        <button
          onClick={() => setShowBookingForm(!showBookingForm)}
          className={styles.bookButton}
        >
          {showBookingForm ? 'Cancel' : 'Book Appointment'}
        </button>
      </div>

      {showBookingForm && (
        <div className={styles.bookingForm}>
          <h2>Book New Appointment</h2>
          <form onSubmit={handleBooking}>
            <div className={styles.formGroup}>
              <label>Select Doctor *</label>
              <select
                value={formData.doctorId}
                onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                className={styles.input}
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    Dr. {doctor.doctor_name} - {doctor.specialisation}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Appointment Mode *</label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                className={styles.input}
                required
              >
                <option value="VIDEO">Video Consultation</option>
                <option value="IN_PERSON">In-Person</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Appointment Date & Time *</label>
              <input
                type="datetime-local"
                value={formData.appointmentTime}
                onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                className={styles.input}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Confirm Booking
            </button>
          </form>
        </div>
      )}

      <div className={styles.appointmentsList}>
        <h2>Your Appointments</h2>
        {appointments.length === 0 ? (
          <p className={styles.noData}>No appointments found</p>
        ) : (
          <div className={styles.grid}>
            {appointments.map((appointment) => (
              <div key={appointment.id} className={styles.appointmentCard}>
                <div className={styles.cardHeader}>
                  <h3>Dr. {appointment.doctor.doctor_name}</h3>
                  <span
                    className={styles.status}
                    style={{ backgroundColor: getStatusColor(appointment.status) }}
                  >
                    {appointment.status}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <p><strong>Specialization:</strong> {appointment.doctor.specialisation}</p>
                  <p><strong>Mode:</strong> {appointment.mode.replace('_', ' ')}</p>
                  <p><strong>Date & Time:</strong> {new Date(appointment.appointmentTime).toLocaleString()}</p>
                  <p><strong>Fees:</strong> ₹{appointment.doctor.fees}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
