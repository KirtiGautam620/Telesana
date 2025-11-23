"use client";
import React from 'react';
import './About.css';

export default function AboutPage() {
  return (
    <div className="page">
      <section className="section hero">
        <div className="container center">
          <h1 className="title">
            <span className="title-dark">Quality Healthcare </span>
            <span className="title-light">Made Simple</span>
          </h1>
          <h2 className="subtitle">Our Mission</h2>
          <p className="text">We make quality healthcare affordable and accessible for everyone. Empowering users with curated information for better healthcare decisions.</p>
        </div>
      </section>

      <section className="section content bg-gray-50">
        <div className="container grid-2 gap items-center">
          <div className="text-col space-y">
            <h2 className="subtitle">Health is a habit</h2>
            <p className="text">
              Health is a journey of happiness, energy, and hope. We make it easy for everyone to live healthier and longer lives.
            </p>
          </div>
          <div className="image-col">
            <div className="image-wrapper rounded shadow">
              <img src="/about.jpg" alt="Healthcare professional" width={600}  height={400} className="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container center">
          <h2 className="subtitle mb-16">What We Offer</h2>
        </div>
        <div className="container grid-3 gap">
          {[
            {title: "Easy Appointment Booking",desc: "Book appointments with top doctors in just a few clicks."},
            {title: "Digital Health Records",desc: "Access your complete medical history anytime, securely."},
            {title: "24/7 Healthcare Support",desc: "Get instant medical advice whenever you need it."}
          ].map((feature, index) => (
            <div key={index} className="feature-card hover-shadow">
              <div className="feature-icon">✓</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
