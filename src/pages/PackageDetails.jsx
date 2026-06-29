import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages, calculateFamilyPrice, calculateGoaFamilyPrice, calculateHoneymoonPrice, calculateGoaHoneymoonPrice, calculateTemplePrice } from '../data/packages';
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
  const [pricingType, setPricingType] = useState('person'); // 'person' or 'couple' for honeymoon
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const pkg = packages.find(p => p.id === parseInt(id));

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Scroll to gallery if hash is present
    if (window.location.hash === '#gallery') {
      setTimeout(() => {
        const galleryElement = document.getElementById('gallery');
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    }
  }, []);

  if (loading) return <Loader />;
  if (!pkg) return <div className="not-found">Package not found</div>;

  // Calculate price based on package type
  const calculatePrice = () => {
    if (pkg.packageType === 'family') {
      const pricePerPerson = calculateFamilyPrice(members);
      return pricePerPerson * members;
    } else if (pkg.packageType === 'goa-family') {
      const pricePerPerson = calculateGoaFamilyPrice(members);
      return pricePerPerson * members;
    } else if (pkg.packageType === 'honeymoon') {
      if (pricingType === 'couple') return pkg.oldCouplePrice || pkg.couplePrice;
      return (pkg.oldPrice || pkg.price) * members;
    } else if (pkg.packageType === 'goa-honeymoon') {
      return calculateGoaHoneymoonPrice(pricingType);
    } else if (pkg.packageType === 'temple') {
      const pricePerPerson = calculateTemplePrice(members);
      return pricePerPerson * members;
    } else if (pkg.packageOptions) {
      const currentPackage = pkg.packageOptions[selectedDuration];
      return currentPackage.price === "Custom" ? "Custom" : currentPackage.price * members;
    } else {
      return (pkg.oldPrice || pkg.price) * members;
    }
  };

  const getPricePerPerson = () => {
    if (pkg.packageType === 'family') {
      return calculateFamilyPrice(members);
    } else if (pkg.packageType === 'goa-family') {
      return calculateGoaFamilyPrice(members);
    } else if (pkg.packageType === 'honeymoon') {
      // Use oldPrice (current price) if available
      if (pricingType === 'couple') return pkg.oldCouplePrice || pkg.couplePrice;
      return pkg.oldPrice || pkg.price;
    } else if (pkg.packageType === 'goa-honeymoon') {
      return pricingType === 'couple' ? pkg.couplePrice : pkg.price;
    } else if (pkg.packageType === 'temple') {
      return calculateTemplePrice(members);
    } else if (pkg.packageOptions) {
      return pkg.packageOptions[selectedDuration].price;
    } else {
      // Use oldPrice (current price) if available
      return pkg.oldPrice || pkg.price;
    }
  };

  const currentPackage = pkg.packageOptions ? pkg.packageOptions[selectedDuration] : { price: pkg.price };
  const isCustomPrice = currentPackage.price === "Custom";
  const totalPrice = calculatePrice();
  const pricePerPerson = getPricePerPerson();

  const handleBookNow = () => {
    let message = '';
    
    if (pkg.packageType === 'honeymoon' || pkg.packageType === 'goa-honeymoon') {
      const pricingText = pricingType === 'couple' 
        ? `Couple Package (₹${pkg.couplePrice})` 
        : `Per Person (₹${pkg.price} x ${members} = ₹${totalPrice})`;
      message = `Hello, I want to book the ${pkg.name}. Pricing: ${pricingText}. ${pkg.route || ''}`;
    } else if (pkg.packageType === 'family' || pkg.packageType === 'goa-family') {
      const pricePerHead = pkg.packageType === 'family' ? calculateFamilyPrice(members) : calculateGoaFamilyPrice(members);
      message = `Hello, I want to book the ${pkg.name} for ${members} ${members === 1 ? 'Member' : 'Members'}. Price: ₹${pricePerHead} per person. Total: ₹${totalPrice}. ${pkg.route || ''}`;
    } else if (pkg.packageType === 'temple') {
      const pricePerHead = calculateTemplePrice(members);
      const discount = members >= 4 ? ' (Group discount applied)' : '';
      message = `Hello, I want to book the ${pkg.name} for ${members} ${members === 1 ? 'Member' : 'Members'}. Price: ₹${pricePerHead} per head${discount}. Total: ₹${totalPrice}.`;
    } else if (pkg.packageOptions) {
      const durationText = `${currentPackage.days} Days / ${currentPackage.nights} Nights`;
      const priceText = isCustomPrice ? "Custom Price (You Decide)" : `₹${totalPrice}`;
      message = `Hello, I want to book the ${pkg.name} (${durationText}) for ${members} ${members === 1 ? 'Member' : 'Members'}. ${isCustomPrice ? 'Please share your best price.' : `Total price is ${priceText}.`}`;
    } else {
      message = `Hello, I want to book the ${pkg.name} for ${members} ${members === 1 ? 'Member' : 'Members'}. Total price is ₹${totalPrice}.`;
    }
    
    const whatsappUrl = `https://wa.me/919059323753?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Gallery images
  const galleryImages = [
    "/keralagal1.jpg",
    "/keralagal2.jpg",
    "/keralagal3.jpg",
    "/keralagal4.jpg",
    "/keralagal5.jpg",
    "/keralagal6.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
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
      
      {pkg.isGoa && (
        <>
          <video autoPlay loop muted playsInline className="package-page-video-bg">
            <source src="/goabg.mp4" type="video/mp4" />
          </video>
          <div className="package-page-video-overlay"></div>
        </>
      )}
      
      {(pkg.packageType === 'lakshadweep') && (
        <>
          <video autoPlay loop muted playsInline className="package-page-video-bg">
            <source src="/laxdeepbg.mp4" type="video/mp4" />
          </video>
          <div className="package-page-video-overlay"></div>
        </>
      )}
      
      {(pkg.packageType === 'darjeeling') && (
        <>
          <video autoPlay loop muted playsInline className="package-page-video-bg">
            <source src="/Darjeelingbg.mp4" type="video/mp4" />
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

      {/* Goa Welcome Section */}
      {pkg.isGoa && (
        <>
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
                Welcome to Goa – India's Beach Paradise
              </motion.h1>
              <motion.p 
                className="kerala-intro-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Goa is a land of sun-kissed beaches, vibrant nightlife, Portuguese heritage, water sports, and endless fun. 
                Experience the perfect blend of relaxation and adventure in India's favorite beach destination.
              </motion.p>
            </div>
          </motion.section>
        </>
      )}

      {/* Lakshadweep Welcome Section */}
      {pkg.packageType === 'lakshadweep' && (
        <>
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
                Welcome to Lakshadweep – India's Tropical Paradise
              </motion.h1>
              <motion.p 
                className="kerala-intro-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Lakshadweep is a pristine archipelago of coral islands with crystal clear waters, white sand beaches, vibrant marine life, and untouched natural beauty. 
                Experience the ultimate island paradise with world-class snorkeling and diving.
              </motion.p>
            </div>
          </motion.section>
        </>
      )}

      {/* Darjeeling Welcome Section */}
      {pkg.packageType === 'darjeeling' && (
        <>
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
                Welcome to Darjeeling – The Queen of Hills
              </motion.h1>
              <motion.p 
                className="kerala-intro-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Darjeeling is a mesmerizing hill station with breathtaking Himalayan views, world-famous tea gardens, colonial charm, and the iconic toy train. 
                Experience the perfect blend of natural beauty, culture, and serenity in the lap of the Himalayas.
              </motion.p>
            </div>
          </motion.section>
        </>
      )}

      {!pkg.isKerala && !pkg.isGoa && pkg.packageType !== 'lakshadweep' && pkg.packageType !== 'darjeeling' && (
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

          {pkg.isKerala && (
            <motion.section 
              id="gallery"
              className="details-section gallery-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Gallery</h2>
              <div className="gallery-carousel">
                <button className="gallery-nav-btn gallery-prev" onClick={prevImage}>
                  ‹
                </button>
                <div className="gallery-image-container" onClick={openLightbox}>
                  <motion.img
                    key={currentImageIndex}
                    src={galleryImages[currentImageIndex]}
                    alt={`Gallery ${currentImageIndex + 1}`}
                    className="gallery-main-image"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="gallery-tap-hint">Tap to view full size</div>
                </div>
                <button className="gallery-nav-btn gallery-next" onClick={nextImage}>
                  ›
                </button>
              </div>
              <div className="gallery-dots">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <div className="gallery-counter">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
              <div className="gallery-instagram-link">
                <p>For more photos and videos, visit us on Instagram</p>
                <a 
                  href="https://www.instagram.com/kerala_memory_travels?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-btn"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @kerala_memory_travels
                </a>
              </div>
            </motion.section>
          )}

          {/* Lightbox for full-size view */}
          {isLightboxOpen && (
            <motion.div
              className="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <button className="lightbox-close" onClick={closeLightbox}>✕</button>
              <button className="lightbox-nav-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                ‹
              </button>
              <motion.img
                key={currentImageIndex}
                src={galleryImages[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="lightbox-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button className="lightbox-nav-btn lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                ›
              </button>
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
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

            {/* Honeymoon Pricing Type Selector */}
            {(pkg.packageType === 'honeymoon' || pkg.packageType === 'goa-honeymoon') && (
              <div className="pricing-type-section">
                <label>Select Pricing</label>
                <div className="pricing-type-buttons">
                  <button
                    className={`pricing-type-btn ${pricingType === 'person' ? 'active' : ''}`}
                    onClick={() => setPricingType('person')}
                  >
                    👤 Per Person<br/>
                    <span className="pricing-type-price">₹{pkg.price}</span>
                  </button>
                  <button
                    className={`pricing-type-btn ${pricingType === 'couple' ? 'active' : ''}`}
                    onClick={() => setPricingType('couple')}
                  >
                    👩‍❤️‍👨 Couple<br/>
                    <span className="pricing-type-price">₹{pkg.couplePrice}</span>
                  </button>
                </div>
              </div>
            )}

            <div className="price-section">
              <span className="price-label">
                {(pkg.packageType === 'honeymoon' || pkg.packageType === 'goa-honeymoon') && pricingType === 'couple' 
                  ? 'Current Couple Price' 
                  : 'Current Price per person'}
              </span>
              <span className="price-value">
                {isCustomPrice ? "Custom" : `₹${pricePerPerson}`}
              </span>
              {/* Show future higher price with strikethrough */}
              {pkg.oldPrice && !(pkg.packageType === 'honeymoon' && pricingType === 'couple') && (
                <span className="future-price-note">
                  📈 From Aug 1, 2026: <s>₹{pkg.price}</s>
                </span>
              )}
              {pkg.oldCouplePrice && pkg.packageType === 'honeymoon' && pricingType === 'couple' && (
                <span className="future-price-note">
                  📈 From Aug 1, 2026: <s>₹{pkg.couplePrice}</s>
                </span>
              )}
              {(pkg.oldPrice || pkg.oldCouplePrice) && (
                <span className="price-increase-alert">⚠️ Book now to lock in today's price!</span>
              )}
              {isCustomPrice && <span className="price-note">Contact us for best price</span>}
              {(pkg.packageType === 'family' || pkg.packageType === 'goa-family') && (
                <span className="price-note">Price reduces with more members!</span>
              )}
              {pkg.packageType === 'temple' && members >= 4 && (
                <span className="price-note">Group discount applied!</span>
              )}
            </div>

            {/* Members selector - hide for honeymoon couple pricing */}
            {!((pkg.packageType === 'honeymoon' || pkg.packageType === 'goa-honeymoon') && pricingType === 'couple') && (
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
            )}

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
