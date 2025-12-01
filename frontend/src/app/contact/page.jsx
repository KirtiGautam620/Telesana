"use client";
import React, { useState } from 'react';
import styles from './contact.module.css';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>Get in touch with our team for any questions or support</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2>Get In Touch</h2>
          <p className={styles.description}>
            We're here to help! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdEmail size={24} />
              </div>
              <h3>Email</h3>
              <p>support@telesana.com</p>
              <p className={styles.subtext}>We'll respond within 24 hours</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdPhone size={24} />
              </div>
              <h3>Phone</h3>
              <p>+91 1800-XXX-XXXX</p>
              <p className={styles.subtext}>Mon-Sat 9:00 AM - 6:00 PM</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdLocationOn size={24} />
              </div>
              <h3>Office</h3>
              <p>New Delhi, India</p>
              <p className={styles.subtext}>Visit us at our headquarters</p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={styles.input}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={styles.input}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={styles.input}
                placeholder="How can we help?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={styles.textarea}
                placeholder="Tell us more about your inquiry..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <MdSend size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
