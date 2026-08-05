import { motion } from "framer-motion";
import { FaArrowRight, FaClipboardCheck } from "react-icons/fa";
import heroImage from "../../assets/images/hero.png";
import "../../styles/home.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">
              🇮🇳 Smart Swachhata Mission
            </span>

            <h1 className="hero-title">
              Keep India Clean
              <br />
              With Smart Technology
            </h1>

            <p className="hero-text">
              Report waste, monitor complaints, track collection vehicles,
              and help create a cleaner and greener India.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-success btn-lg">
                <FaClipboardCheck /> Report Complaint
              </button>

              <button className="btn btn-outline-success btn-lg">
                <FaArrowRight /> Dashboard
              </button>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 text-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={heroImage}
              className="img-fluid hero-image"
              alt="Smart Swachhata"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;