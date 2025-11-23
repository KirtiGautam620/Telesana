import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <h2>Telesana</h2>
          <p>
            A complete healthcare management system designed to help you book appointments,
            consult doctors, and manage your medical journey effortlessly.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            <li>Online Consultation</li>
            <li>Health Checkups</li>
            <li>Emergency Support</li>
            <li>Doctor Appointments</li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
              <a href="#">LinkedIn</a>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">© {new Date().getFullYear()} Telesana. All Rights Reserved.</div>
    </footer>
  );
}
