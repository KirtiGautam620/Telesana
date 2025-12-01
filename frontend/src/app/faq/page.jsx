"use client";
import React, { useState } from 'react';
import styles from './faq.module.css';
import { MdExpandMore } from 'react-icons/md';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through the Appointments page in your dashboard. Select your preferred doctor, choose consultation mode (video or in-person), and pick a suitable date and time."
    },
    {
      question: "What is the MediBuddy chatbot?",
      answer: "MediBuddy is our AI-powered medical assistant that can answer your health-related questions 24/7. It uses advanced AI to provide accurate medical information based on trusted medical resources."
    },
    {
      question: "How can I access my health records?",
      answer: "Your health records are available in the Health Summary section of your dashboard. You can view your vital signs, prescriptions, and medical history anytime."
    },
    {
      question: "What types of consultations are available?",
      answer: "We offer both video consultations and in-person appointments. Video consultations are convenient for quick check-ups, while in-person visits are recommended for thorough examinations."
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to the User Profile section in your dashboard to update your personal information, contact details, and medical history."
    },
    {
      question: "Are my medical records secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your medical data. Your information is stored securely and is only accessible to you and your authorized healthcare providers."
    },
    {
      question: "Can I reschedule or cancel an appointment?",
      answer: "Yes, you can manage your appointments through the Appointments or Calendar section. Please note that cancellation policies may vary by doctor."
    },
    {
      question: "How do prescriptions work?",
      answer: "After your consultation, your doctor can provide digital prescriptions which will be available in your Health Summary. You can view and download them anytime."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, UPI, and digital wallets. Payment is processed securely through our encrypted payment gateway."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "You can reach our support team through the Contact page or use the chat support feature in your dashboard. We're here to help 24/7."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>Find answers to common questions about TeleSana</p>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <MdExpandMore
                className={`${styles.icon} ${activeIndex === index ? styles.rotated : ''}`}
                size={24}
              />
            </button>
            <div className={`${styles.answer} ${activeIndex === index ? styles.show : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactSection}>
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Please contact our support team.</p>
        <a href="/contact" className={styles.contactButton}>Contact Us</a>
      </div>
    </div>
  );
};

export default FAQPage;
