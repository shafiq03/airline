import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-section">
          <h2>SkyBook</h2>
          <p>
            Book your flights easily and travel around the world with comfort
            and affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>My Bookings</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@skybook.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Chennai, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 SkyBook. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;