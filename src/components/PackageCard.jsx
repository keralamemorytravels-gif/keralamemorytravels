import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PackageCard.css';

function PackageCard({ package: pkg }) {
  const isComingSoon = pkg.comingSoon;
  
  return (
    <motion.div 
      className={`package-card ${isComingSoon ? 'coming-soon' : ''}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="package-image">
        <img src={pkg.image} alt={pkg.name} loading="lazy" />
        {pkg.badge && <div className={`package-badge-label ${pkg.badge.toLowerCase().replace(' ', '-')}`}>{pkg.badge}</div>}
        {!isComingSoon && <div className="package-badge">₹{pkg.price}/head</div>}
        {isComingSoon && <div className="coming-soon-overlay">Coming Soon</div>}
      </div>
      <div className="package-content">
        <h3 className="package-title">{pkg.name}</h3>
        <p className="package-duration">⏱️ {pkg.duration}</p>
        <p className="package-description">{pkg.shortDescription}</p>
        {!isComingSoon ? (
          <Link to={`/package/${pkg.id}`} className="view-details-btn">
            Enquire Now →
          </Link>
        ) : (
          <button className="view-details-btn disabled" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default PackageCard;
