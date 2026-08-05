import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaTruck,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

import "../../styles/home.css";

const stats = [
  {
    icon: <FaClipboardCheck />,
    number: "18K+",
    title: "Complaints Solved",
  },
  {
    icon: <FaTruck />,
    number: "420+",
    title: "Waste Collection Vehicles",
  },
  {
    icon: <FaUsers />,
    number: "2.5L+",
    title: "Citizens Registered",
  },
  {
    icon: <FaLeaf />,
    number: "95%",
    title: "Cleanliness Score",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-card">

                <div className="stat-icon">
                  {item.icon}
                </div>

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;