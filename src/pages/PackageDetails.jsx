import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import './PackageDetails.css';

function PackageDetails() {
  const { id } = useParams();
  const [members, setMembers] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const pkg = packages.find(p => p.id === parseInt(id));

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) return <Loader />;
  if (!pkg) return <div className="not-found">Package not found</div>;

  const totalPrice = pkg.price * members;

  const handleBookNow = () => {
    const message = `Hello, I want to book the ${pkg.name} for ${members} ${members === 1 ? 'Member' : 'Members'}. Total price is ₹${totalPrice}.`;
    const whatsappUrl = `https://wa.me/918143724405?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="package-details">
      <motion.div 
        className="details-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={pkg.image} alt={pkg.name} className="details-hero-image" />
        <div className="details-hero-overlay">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/" className="back-link">← Back to Packages</Link>
            </motion.div>
            <motion.h1 
              className="details-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {pkg.name}
            </motion.h1>
            <motion.p 
              className="details-duration"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              ⏱️ {pkg.duration}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="container details-content">
        <div className="details-main">
          <motion.section 
            className="details-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>About This Package</h2>
            <p className="details-description">{pkg.fullDescription}</p>
          </motion.section>

          <motion.section 
            className="details-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2>Locations Covered</h2>
            <ul className="locations-list">
              {pkg.locations.map((location, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="location-icon">📍</span>
                  {location}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section 
            className="details-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>What's Included</h2>
            <ul className="includes-list">
              {pkg.includes.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="include-icon">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section 
            className="details-section gallery-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {[1, 2, 3].map((i) => (
                <motion.img 
                  key={i}
                  src={pkg.image} 
                  alt={`Gallery ${i}`} 
                  className="gallery-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.section>
        </div>

        <motion.div 
          className="details-sidebar"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="booking-card">
            <div className="price-section">
              <span className="price-label">Price per head</span>
              <span className="price-value">₹{pkg.price}</span>
            </div>

            <div className="members-section">
              <label htmlFor="members">Number of Members</label>
              <select 
                id="members"
                value={members} 
                onChange={(e) => setMembers(parseInt(e.target.value))}
                className="members-select"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Member' : 'Members'}</option>
                ))}
              </select>
            </div>

            <div className="total-section">
              <span className="total-label">Total Price</span>
              <motion.span 
                className="total-value"
                key={totalPrice}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                ₹{totalPrice}
              </motion.span>
            </div>

            <motion.button 
              onClick={handleBookNow} 
              className="book-now-btn"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(37, 211, 102, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book Now on WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>

      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default PackageDetails;
