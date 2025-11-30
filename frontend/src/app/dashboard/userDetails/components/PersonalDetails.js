"use client";
import React from "react";
import "../components-css/personalDetails.css";

export default function PersonalDetails() {
  return (<div className="details-container">
    <h2>Personal Details</h2>
    <div className="details-card">

      <div className="details-grid">

        <div className="detail-item">
          <label>Full Name</label>
          <p>Jane Doe</p>
        </div>

        <div className="detail-item">
          <label>Gender</label>
          <p>Female</p>
        </div>

        <div className="detail-item">
          <label>Age</label>
          <p>25</p>
        </div>

        <div className="detail-item">
          <label>Date Of Birth</label>
          <p>01/01/2000</p>
        </div>

        <div className="detail-item">
          <label>Phone Number</label>
          <p>9876543210</p>
        </div>

        <div className="detail-item">
          <label>Blood Group</label>
          <p>O+</p>
        </div>

        <div className="detail-item">
          <label>Address</label>
          <p>Seattle, Washington State</p>
        </div>

        <div className="detail-item">
          <label>Created At</label>
          <p>24/11/2025</p>
        </div>

      </div>
    </div>
  </div>);
}