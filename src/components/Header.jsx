import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Kerala Memory Travels" className="logo-image" />
            <span className="logo-text">Kerala Memory Travels</span>
          </Link>
          
          <nav className="nav desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <a href="#packages" className="nav-link">Packages</a>
            <Link to="/package/1#gallery" className="nav-link">Gallery</Link>
            <button onClick={() => setShowBookingModal(true)} className="nav-link nav-button">How to Book</button>
            <a href="https://wa.me/919059323753" className="nav-link cta">Contact Us</a>
          </nav>

          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <a href="#packages" className="nav-link" onClick={() => setIsMenuOpen(false)}>Packages</a>
              <Link to="/package/1#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <button onClick={() => { setShowBookingModal(true); setIsMenuOpen(false); }} className="nav-link nav-button">How to Book</button>
              <a href="https://wa.me/919059323753" className="nav-link cta" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Booking Instructions Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowBookingModal(false)}>✕</button>
              <h2 className="modal-title">📋 How to Book Your Kerala Package</h2>
              
              <div className="booking-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Browse Packages</h3>
                    <p>Explore our Kerala packages and select the duration that suits you (2-6 days available)</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Choose Your Itinerary</h3>
                    <p>Select from multiple package options for your preferred duration. Each package offers different routes and experiences</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Contact Us on WhatsApp</h3>
                    <p>Click "Book Now" or "Get Custom Quote" to reach us on WhatsApp at <strong>9059323753</strong></p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Customize Your Trip</h3>
                    <p>Share your travel dates, number of members, and any special requirements. We'll customize the package for you</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3>Confirm & Pay</h3>
                    <p>Review the final itinerary and pricing. Make payment as per our guidance and receive confirmation</p>
                  </div>
                </div>
              </div>

              <div className="modal-note">
                <p><strong>📍 Note:</strong> Package prices are for Kerala destinations only. If you need travel arrangements from your city (train/flight tickets), we can assist with additional charges.</p>
                <p><strong>💰 Pricing:</strong> 2 Days - Custom | 3 Days - ₹3999 | 4-6 Days - ₹4999 per person</p>
              </div>

              <button className="modal-cta" onClick={() => window.open('https://wa.me/919059323753?text=Hi, I want to book a Kerala package', '_blank')}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book Now on WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
