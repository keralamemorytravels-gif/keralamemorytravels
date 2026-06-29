import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PackageCard.css';

function PackageCard({ package: pkg }) {
  const isComingSoon = pkg.comingSoon;
  
  // Current price = oldPrice (what they pay now), future price = price (from Aug 2026)
  const getCurrentPrice = () => {
    if (isComingSoon) return null;
    if (pkg.packageType === 'family') return `From ₹${pkg.basePrice}/person`;
    if (pkg.oldPrice) return `₹${pkg.oldPrice}/person`;
    return `₹${pkg.price}/person`;
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
        {!isComingSoon && <div className="package-badge">{getCurrentPrice()}</div>}
        {isComingSoon && <div className="coming-soon-overlay">Coming Soon</div>}
      </div>
      <div className="package-content">
        <h3 className="package-title">{pkg.name}</h3>
        <p className="package-duration">⏱️ {pkg.duration}</p>
        <p className="package-description">{pkg.shortDescription}</p>
        {pkg.oldPrice && (
          <div className="price-increase-notice">
            <div className="current-price-row">✅ Current Price: <strong>₹{pkg.oldPrice}/person</strong></div>
            <div className="future-price-row">📈 From Aug 1, 2026: <s className="strike-price">₹{pkg.price}/person</s></div>
            <span className="price-warning">⚠️ Book now to lock in today's price!</span>
          </div>
        )}
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
