"use client";
import React from "react";
import "../components-css/healthSummary.css";

export default function HealthSummary() {
  return (
    <div className="health-summary-container">
      <h2 className="section-title">Health Summary</h2>

      {/* Risk Level */}
      <div className="health-card risk-card">
        <h3>Overall Health Risk</h3>
        <p className="risk-status medium">Medium</p>
        {/* Use classes: low / medium / high */}
      </div>

      {/* Vital Stats */}
      <div className="health-card">
        <h3>Latest Vital Statistics</h3>
        <div className="vitals-grid">
          <div className="vital-item">
            <span className="label">Blood Pressure</span>
            <span className="value">118/76 mmHg</span>
          </div>
          <div className="vital-item">
            <span className="label">Heart Rate</span>
            <span className="value">74 bpm</span>
          </div>
          <div className="vital-item">
            <span className="label">Blood Sugar (Fasting)</span>
            <span className="value">92 mg/dL</span>
          </div>
          <div className="vital-item">
            <span className="label">SpO₂</span>
            <span className="value">98%</span>
          </div>
          <div className="vital-item">
            <span className="label">Weight</span>
            <span className="value">58 kg</span>
          </div>
          <div className="vital-item">
            <span className="label">BMI</span>
            <span className="value">22.1</span>
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="health-card">
        <h3>Known Conditions</h3>
        <ul className="list">
          <li>Hypertension (Controlled)</li>
          <li>Vitamin D Deficiency</li>
          <li>Mild Seasonal Allergies</li>
        </ul>
      </div>

      {/* Medications */}
      <div className="health-card">
        <h3>Current Medications</h3>
        <ul className="list">
          <li>Metformin 500mg — once daily</li>
          <li>Vitamin D3 — once weekly</li>
          <li>Amlodipine 5mg — once daily</li>
        </ul>
      </div>

      {/* Doctor Notes */}
      <div className="health-card">
        <h3>Recent Doctor Notes</h3>
        <p className="notes">
          Patient is advised to maintain regular morning walks and avoid
          high-sodium foods. Follow-up recommended in 2 months.
        </p>
      </div>

      {/* Recommendations */}
      <div className="health-card">
        <h3>Health Recommendations</h3>
        <ul className="list">
          <li>Drink at least 2-3 liters of water daily</li>
          <li>Walk for 30 minutes every day</li>
          <li>Maintain consistent sleep schedule</li>
          <li>Reduce processed foods</li>
        </ul>
      </div>
    </div>
  );
}
