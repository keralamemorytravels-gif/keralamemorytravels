import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PackageCard.css';

function PackageCard({ package: pkg }) {
  return (
    <motion.div 
      className="package-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="package-image">
        <img src={pkg.image} alt={pkg.name} loading="lazy" />
        {pkg.badge && <div className={`package-badge-label ${pkg.badge.toLowerCase()}`}>{pkg.badge}</div>}
        <div className="package-badge">₹{pkg.price}/head</div>
      </div>
      <div className="package-content">
        <h3 className="package-title">{pkg.name}</h3>
        <p className="package-duration">⏱️ {pkg.duration}</p>
        <p className="package-description">{pkg.shortDescription}</p>
        <Link to={`/package/${pkg.id}`} className="view-details-btn">
          Enquire Now →
        </Link>
      </div>
    </motion.div>
  );
}

export default PackageCard;
