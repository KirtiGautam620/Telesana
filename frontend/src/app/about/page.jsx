"use client";
import React from 'react';
import './About.css';

export default function AboutPage() {
  const features = [
    {
      icon: "📅",
      title: "Easy Appointment Booking",
      desc: "Book appointments with top doctors in just a few clicks. Choose your preferred time and specialty."
    },
    {
      icon: "🏥",
      title: "Digital Health Records",
      desc: "Access your complete medical history anytime, securely. Keep all documents in one place."
    },
    {
      icon: "🔔",
      title: "24/7 Healthcare Support",
      desc: "Get instant medical advice whenever you need it. Connect with specialists round the clock."
    },
    {
      icon: "💊",
      title: "Prescription Management",
      desc: "Manage and refill prescriptions digitally. Get medicine delivered to your doorstep."
    },
    {
      icon: "📊",
      title: "Health Analytics",
      desc: "Track your health metrics and get personalized insights for better wellness."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      desc: "Your data is encrypted and protected. We comply with all healthcare privacy standards."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Patients" },
    { number: "500+", label: "Verified Doctors" },
    { number: "25+", label: "Medical Specialties" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="page">
      <section className="section hero-section">
        <div className="container center">
          <h1 className="title">
            <span className="title-dark">Quality Healthcare </span>
            <span className="title-light">Made Simple</span>
          </h1>
          <p className="subtitle-text">Revolutionizing healthcare by making it accessible, affordable, and personalized for everyone.</p>
        </div>
      </section>
      <section className="section mission-section">
        <div className="container grid-2 gap items-center">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="text">We envision a world where quality healthcare is just a click away. Our mission is to democratize healthcare by connecting patients with experienced doctors and making medical services affordable and accessible to everyone.</p>
            <ul className="mission-list">
              <li>Empower patients with medical information</li>
              <li>Connect qualified healthcare professionals</li>
              <li>Simplify appointment and prescription management</li>
              <li>Ensure data security and privacy</li>
            </ul>
          </div>
          <div className="mission-image">
            <div className="image-wrapper">
              <img src="/about.jpg" alt="Healthcare professional" width={500} height={400} className="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive healthcare solutions tailored for you</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-large">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <h2 className="section-title center">Why Choose Telesana?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                ✨
              </div>
              <h3>Expert Doctors</h3>
              <p>Verified medical professionals with years of experience</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Fast & Efficient</h3>
              <p>Quick consultations and instant prescription delivery</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Transparent pricing with no hidden charges</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌍</div>
              <h3>24/7 Available</h3>
              <p>Round-the-clock healthcare support whenever you need</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
