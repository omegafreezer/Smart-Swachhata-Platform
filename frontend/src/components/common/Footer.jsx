import {
  FaRecycle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Logo */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="footer-logo">
              <FaRecycle /> Smart Swachhata
            </h3>

            <p>
              Building cleaner, greener and smarter cities through
              technology, citizen participation and intelligent waste
              management.
            </p>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>

            <ul className="footer-links">
              <li>Home</li>
              <li>Features</li>
              <li>Dashboard</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Contact</h5>

            <p><FaEnvelope /> support@smartswachhata.com</p>

            <p><FaPhone /> +91 9876543210</p>

            <p><FaMapMarkerAlt /> Bhubaneswar, Odisha</p>

          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Follow Us</h5>

            <div className="social-icons">

              <FaFacebook />

              <FaTwitter />

              <FaLinkedin />

              <FaInstagram />

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom text-center">

          © 2026 Smart Swachhata Platform | Developed using React, Agile, DevOps & Cloud

        </div>

      </div>

    </footer>
  );
}

export default Footer;