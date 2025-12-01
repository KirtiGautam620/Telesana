"use client";
import React, { useState, useEffect } from 'react';
import styles from './userDetails.module.css';
import toast from 'react-hot-toast';

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const [patient, setPatient] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    gender: 'M',
    dob: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userData);
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/api/patient/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setPatient(data);
        setFormData({
          fullName: data.fullName,
          phone: data.phone || '',
          gender: data.gender,
          dob: data.dob?.split('T')[0] || ''
        });
      } else if (response.status === 404) {
        setIsEditing(true);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.dob || !formData.gender) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const method = patient ? 'PUT' : 'POST';
      const response = await fetch('http://localhost:4000/api/patient/profile', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setPatient(data.patient);
        setIsEditing(false);
      } else {
        toast.error(data.message || 'Failed to save profile');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>User Profile</h1>
        {patient && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className={styles.editButton}
          >
            Edit Profile
          </button>
        )}
      </div>

      {user && (
        <div className={styles.accountInfo}>
          <h2>Account Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <label>Username</label>
              <p>{user.username}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Email</label>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.profileSection}>
        <h2>Personal Information</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Full Name *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={styles.input}
                placeholder="Optional"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Gender *</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className={styles.input}
                required
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Date of Birth *</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
              {patient && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      fullName: patient.fullName,
                      phone: patient.phone || '',
                      gender: patient.gender,
                      dob: patient.dob?.split('T')[0] || ''
                    });
                  }}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        ) : patient ? (
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <label>Full Name</label>
              <p>{patient.fullName}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Phone</label>
              <p>{patient.phone || 'Not provided'}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Gender</label>
              <p>{patient.gender === 'M' ? 'Male' : 'Female'}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Date of Birth</label>
              <p>{new Date(patient.dob).toLocaleDateString()}</p>
            </div>
          </div>
        ) : (
          <p className={styles.noData}>Please create your profile</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;