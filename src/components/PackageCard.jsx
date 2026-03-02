import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PackageCard.css';

function PackageCard({ package: pkg }) {
  const isComingSoon = pkg.comingSoon;
  
  // Determine price display based on package type
  const getPriceDisplay = () => {
    if (isComingSoon) return null;
    
    if (pkg.packageType === 'group') {
      return `₹${pkg.price}/person`;
    } else if (pkg.packageType === 'honeymoon') {
      return `₹${pkg.price}/person`;
    } else if (pkg.packageType === 'family') {
      return `From ₹${pkg.basePrice}/person`;
    } else if (pkg.packageType === 'temple') {
      return `₹${pkg.price}/person`;
    } else {
      return `₹${pkg.price}/person`;
    }
  };
  
  return (
    <motion.div 
      className={`package-card ${isComingSoon ? 'coming-soon' : ''}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="package-image">
        <img src={pkg.image} alt={pkg.name} loading="lazy" />
        {pkg.badge && <div className={`package-badge-label ${pkg.badge.toLowerCase().replace(' ', '-')}`}>{pkg.badge}</div>}
        {!isComingSoon && <div className="package-badge">{getPriceDisplay()}</div>}
        {isComingSoon && <div className="coming-soon-overlay">Coming Soon</div>}
      </div>
      <div className="package-content">
        <h3 className="package-title">{pkg.name}</h3>
        <p className="package-duration">⏱️ {pkg.duration}</p>
        <p className="package-description">{pkg.shortDescription}</p>
        {pkg.pricingNote && <p className="pricing-note">{pkg.pricingNote}</p>}
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
