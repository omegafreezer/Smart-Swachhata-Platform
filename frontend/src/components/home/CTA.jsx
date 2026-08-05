import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">

        <motion.div
          className="cta-card text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2>Ready to Make Your City Cleaner?</h2>

          <p>
            Join thousands of citizens who are helping build a cleaner,
            greener and smarter future through Smart Swachhata Platform.
          </p>

          <div className="cta-buttons">

            <Link to="/complaint" className="btn btn-success btn-lg">
              Report Complaint
            </Link>

            <Link
              to="/dashboard"
              className="btn btn-outline-light btn-lg"
            >
              Explore Dashboard
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;