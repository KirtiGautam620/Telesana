"use client";
import Image from "next/image";
import doctorsImg from "../../../public/home.png";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import "./HomePage.css";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="left-content">
          {/* <span className="badge">Healthcare made simple</span> */}
          <h1 className="title">
            Connect with <br />
            doctors <br />
            <span className="highlight">anytime, anywhere</span>
          </h1>

          <p className="description">
            Book appointments, consult via video, and manage your healthcare
            journey all in one secure platform.
          </p>

          <div className="buttons">
            <Link href="/signup" className="button-primary">
              Get Started
            </Link>

            <Link href="/doctors" className="button-secondary">
              Find Doctors
            </Link>
          </div>
        </div>

        <div className="right-content">
          <Image
            src={doctorsImg}
            alt="Doctors"
            width={660}
            height={450}
            className="image"
          />
        </div>
      </div>

      {/* MediBuddy Chatbot Widget */}
      <Chatbot />
    
    </section>
  );
}
