import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaRecycle,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import aboutImage from "../../assets/images/about.png";
import "../../styles/home.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="Smart Swachhata Platform"
              className="img-fluid about-image"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="hero-badge">
              ABOUT SMART SWACHHATA
            </span>

            <h2 className="section-title mt-3">
              Empowering Citizens for a Cleaner & Smarter India
            </h2>

            <p className="about-text">
              Smart Swachhata Platform is a digital solution that connects
              citizens with municipal authorities to improve sanitation and
              waste management. The platform enables users to report complaints,
              monitor waste collection, analyze city cleanliness, and encourage
              community participation through rewards.
            </p>

            <div className="about-list">

              <div className="about-item">
                <FaCheckCircle />
                <span>Easy Complaint Registration & Live Tracking</span>
              </div>

              <div className="about-item">
                <FaRecycle />
                <span>Smart Waste Collection Management</span>
              </div>

              <div className="about-item">
                <FaChartLine />
                <span>Interactive Analytics Dashboard</span>
              </div>

              <div className="about-item">
                <FaUsers />
                <span>Citizen Rewards & Community Engagement</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;