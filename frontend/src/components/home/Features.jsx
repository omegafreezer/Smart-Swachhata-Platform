import { motion } from "framer-motion";
import {
  FaTrashAlt,
  FaTruck,
  FaChartLine,
  FaGift,
} from "react-icons/fa";

import "../../styles/home.css";

const features = [
  {
    icon: <FaTrashAlt />,
    title: "Smart Complaint Management",
    description:
      "Citizens can report garbage, overflowing bins, and sanitation issues with image uploads and live tracking.",
  },
  {
    icon: <FaTruck />,
    title: "Waste Collection Tracking",
    description:
      "Monitor waste collection vehicles and optimize routes for faster and more efficient service.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics Dashboard",
    description:
      "Visualize complaint trends, ward performance, and cleanliness metrics using interactive charts.",
  },
  {
    icon: <FaGift />,
    title: "Rewards & Recognition",
    description:
      "Encourage citizen participation with reward points, badges, and community rankings.",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Platform Features</h2>
          <p className="section-subtitle">
            Everything needed to build a smarter, cleaner and greener city.
          </p>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;