import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import QuickNav from '../components/QuickNav';
import './PackageDetails.css';

function PackageDetails() {
  const { id } = useParams();
  const [members, setMembers] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const pkg = packages.find(p => p.id === parseInt(id));

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) return <Loader />;
  if (!pkg) return <div className="not-found">Package not found</div>;

  const currentPackage = pkg.packageOptions ? pkg.packageOptions[selectedDuration] : { price: pkg.price };
  const isCustomPrice = currentPackage.price === "Custom";
  const totalPrice = isCustomPrice ? "Custom" : currentPackage.price * members;

  const handleBookNow = () => {
    const durationText = pkg.packageOptions ? `${currentPackage.days} Days / ${currentPackage.nights} Nights` : pkg.duration;
    const priceText = isCustomPrice ? "Custom Price (You Decide)" : `₹${totalPrice}`;
    const message = `Hello, I want to book the ${pkg.name} (${durationText}) for ${members} ${members === 1 ? 'Member' : 'Members'}. ${isCustomPrice ? 'Please share your best price.' : `Total price is ${priceText}.`}`;
    const whatsappUrl = `https://wa.me/919059323753?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Kerala cultural highlights
  const keralaCulturalHighlights = [
    {
      title: "Traditional Elephant Festival",
      description: "Witness the majestic temple elephants adorned in golden ornaments during vibrant festive processions that showcase Kerala's rich cultural heritage.",
      icon: "🐘",
      bgImage: "/traditionalelephant.jpg.jpg"
    },
    {
      title: "Chenda Melam (Traditional Drums)",
      description: "Experience the powerful rhythmic beats of traditional Kerala temple drum performances that echo through ancient temple courtyards.",
      icon: "🥁",
      bgImage: "/chendamelamdrums.jpg"
    },
    {
      title: "Kathakali Performance",
      description: "Marvel at Kerala's classical dance-drama art form featuring elaborate costumes, intricate makeup, and expressive storytelling through dance.",
      icon: "🎭",
      bgImage: "/Kathakalidance.jpg"
    },
    {
      title: "Backwater Experience",
      description: "Glide through the serene Alleppey backwaters on a traditional houseboat, surrounded by lush greenery and tranquil waters.",
      icon: "🚢",
      bgImage: "/BackwatersofKerala.jpg"
    }
  ];

  return (
    <div className="package-details">
      {pkg.isKerala && (
        <>
          <video autoPlay loop muted playsInline className="package-page-video-bg">
            <source src="/elephantbg.mp4" type="video/mp4" />
          </video>
          <div className="package-page-video-overlay"></div>
        </>
      )}
      
      {pkg.isKerala && (
        <>
          {/* Kerala Welcome Section */}
          <motion.section 
            className="kerala-intro-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container">
              <motion.h1 
                className="kerala-intro-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Welcome to God's Own Country – Kerala
              </motion.h1>
              <motion.p 
                className="kerala-intro-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Kerala is a land of backwaters, lush greenery, cultural heritage, traditional art forms, and breathtaking landscapes. 
                Experience nature, tradition, and serenity in one unforgettable journey.
              </motion.p>
            </div>
            <div className="coconut-divider">
              <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,50 Q300,80 600,50 T1200,50 L1200,100 L0,100 Z" fill="#fff"/>
              </svg>
            </div>
          </motion.section>

          {/* Cultural Highlights Section */}
          <section className="cultural-highlights-section">
            <div className="container">
              <motion.h2 
                className="section-title-kerala"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Cultural Highlights
              </motion.h2>
              <div className="cultural-grid">
                {keralaCulturalHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="cultural-card"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${item.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="cultural-icon">{item.icon}</div>
                    <h3 className="cultural-title">{item.title}</h3>
                    <p className="cultural-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Wave Divider */}
          <div className="wave-divider">
            <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z" fill="#f0fdf4"/>
            </svg>
          </div>
        </>
      )}

      {!pkg.isKerala && (
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
      )}

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

          {pkg.itineraries && (
            <motion.section 
              className="details-section itinerary-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>{currentPackage.days} Days Magical Kerala Tour Itinerary ✨🌴</h2>
              {pkg.itineraries[currentPackage.days]?.packages?.map((packageOption, pkgIndex) => (
                <div key={pkgIndex} className="package-option">
                  {pkg.itineraries[currentPackage.days].packages.length > 1 && (
                    <h3 className="package-option-title">{packageOption.packageName}</h3>
                  )}
                  <div className="itinerary-timeline">
                    {packageOption.days.map((day, index) => (
                      <motion.div
                        key={index}
                        className="itinerary-day"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="day-number">Day {day.day}</div>
                        <div className="day-content">
                          <h3 className="day-title">{day.title}</h3>
                          <p className="day-subtitle">{day.subtitle}</p>
                          <div className="day-places">
                            {day.places.map((place, idx) => (
                              <span key={idx} className="place-tag">📍 {place}</span>
                            ))}
                          </div>
                          <p className="day-description">{day.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>
          )}

          <motion.section 
            className="details-section gallery-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {[
                "/keralagal1.jpg",
                "/keralagal2.jpg",
                "/keralagal3.jpg"
              ].map((img, i) => (
                <motion.img 
                  key={i}
                  src={img} 
                  alt={`Gallery ${i + 1}`} 
                  className="gallery-image"
                  onClick={() => openLightbox(img)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.section>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <motion.div 
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div 
                className="lightbox-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                <img src={lightboxImage} alt="Gallery view" />
              </motion.div>
            </motion.div>
          )}
        </div>

        <motion.div 
          className="details-sidebar"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="booking-card">
            {pkg.packageOptions && (
              <div className="duration-section">
                <label htmlFor="duration">Select Duration</label>
                <select 
                  id="duration"
                  value={selectedDuration} 
                  onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
                  className="duration-select"
                >
                  {pkg.packageOptions.map((option, index) => (
                    <option key={index} value={index}>
                      {option.days} Days / {option.nights} Nights - {option.price === "Custom" ? option.label : `₹${option.price}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="price-section">
              <span className="price-label">Price per head</span>
              <span className="price-value">{isCustomPrice ? "Custom" : `₹${currentPackage.price}`}</span>
              {isCustomPrice && <span className="price-note">Contact us for best price</span>}
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
                {isCustomPrice ? "Custom" : `₹${totalPrice}`}
              </motion.span>
            </div>

            <motion.button 
              onClick={handleBookNow} 
              className="book-now-btn"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(251, 133, 0, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {isCustomPrice ? "Get Custom Quote" : "Book Now on WhatsApp"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <ScrollToTop />
      <FloatingWhatsApp />
      <QuickNav />
    </div>
  );
}

export default PackageDetails;
