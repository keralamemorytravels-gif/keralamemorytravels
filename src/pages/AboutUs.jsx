import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Kerala Memory Travels</h1>
          <p>Your Trusted Travel Partner Since 2017</p>
        </motion.div>
      </div>

      <div className="container about-container">

        <motion.section className="about-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Who We Are</h2>
          <p>Kerala Memory Travels is a dedicated travel company specializing in personalized tour packages across India's most beautiful destinations. Founded with a passion for travel and a deep love for Kerala's natural beauty, we have been crafting unforgettable journeys for over 7 years.</p>
          <p>We are a team of local experts who know every hidden gem, scenic route, and authentic experience that these destinations have to offer. From the tranquil backwaters of Alleppey to the misty mountains of Darjeeling, we bring you closer to nature, culture, and memories that last a lifetime.</p>
        </motion.section>

        <motion.section className="about-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Our Mission</h2>
          <p>Our mission is simple — to make travel affordable, authentic, and memorable. We believe every traveler deserves to experience the magic of India's diverse landscapes without breaking the bank. We focus on:</p>
          <ul className="about-list">
            <li>✅ Creating fully customized travel experiences</li>
            <li>✅ Offering transparent and competitive pricing</li>
            <li>✅ Providing 24/7 support throughout your journey</li>
            <li>✅ Ensuring safety and comfort at every step</li>
            <li>✅ Showcasing authentic local culture and experiences</li>
          </ul>
        </motion.section>

        <motion.section className="about-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Our Story</h2>
          <p>Kerala Memory Travels was born out of a simple idea — to share the magic of Kerala with the world. Our founder, a native Keralite, noticed that many travelers were missing the real essence of Kerala — the village life, the temple festivals, the backwater sunsets, and the warmth of local hospitality.</p>
          <p>Starting with just a few Kerala packages, we have grown into a full-service travel company offering tours to Goa, Lakshadweep, Darjeeling, and many more destinations across India. Today, we are proud to have served over 1,500 satisfied travelers who carry beautiful memories from their journeys with us.</p>
        </motion.section>

        <motion.section className="about-stats-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="stat-box"><h3>7+</h3><p>Years of Experience</p></div>
          <div className="stat-box"><h3>1500+</h3><p>Happy Travelers</p></div>
          <div className="stat-box"><h3>50+</h3><p>Destinations Covered</p></div>
          <div className="stat-box"><h3>4.8★</h3><p>Average Rating</p></div>
        </motion.section>

        <motion.section className="about-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card"><span>🌴</span><h3>Kerala Tours</h3><p>Group, honeymoon, family, and temple packages across Kerala's most beautiful destinations.</p></div>
            <div className="offer-card"><span>🏖️</span><h3>Goa Packages</h3><p>Beach holidays, water sports, nightlife, and family-friendly Goa experiences.</p></div>
            <div className="offer-card"><span>🏝️</span><h3>Lakshadweep Tours</h3><p>Exclusive island escapes with snorkeling, scuba diving, and pristine beaches.</p></div>
            <div className="offer-card"><span>🏔️</span><h3>Darjeeling Packages</h3><p>Himalayan adventures with tea garden tours, toy train rides, and sunrise views.</p></div>
          </div>
        </motion.section>

        <motion.section className="about-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Why Travelers Choose Us</h2>
          <ul className="about-list">
            <li>🗺️ <strong>Local Expertise:</strong> Born and raised in Kerala, we know the best spots that guidebooks miss.</li>
            <li>💰 <strong>Best Price Guarantee:</strong> We offer competitive pricing with no hidden charges.</li>
            <li>📞 <strong>24/7 Support:</strong> Our team is always available on WhatsApp for assistance.</li>
            <li>✨ <strong>Customized Packages:</strong> Every trip is tailored to your preferences and budget.</li>
            <li>🏨 <strong>Quality Accommodations:</strong> Carefully selected hotels and resorts for comfort.</li>
            <li>🚗 <strong>Comfortable Transport:</strong> AC vehicles with experienced local drivers.</li>
          </ul>
        </motion.section>

        <motion.section className="about-cta"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Ready to Plan Your Dream Trip?</h2>
          <p>Contact us today and let us create an unforgettable travel experience for you!</p>
          <div className="about-cta-buttons">
            <Link to="/contact" className="cta-btn primary">Contact Us</Link>
            <a href="https://wa.me/919059323753?text=Hi, I want to book a travel package" className="cta-btn secondary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </motion.section>

      </div>
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default AboutUs;
