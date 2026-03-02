import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PackageCard from '../components/PackageCard';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import QuickNav from '../components/QuickNav';
import { packages } from '../data/packages';
import './Home.css';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home">
      {/* 1. Hero Section - Welcome & Main CTA */}
      <section className="hero">
        <div className="sky-gradient"></div>
        <div className="clouds">
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </div>
        <motion.div 
          className="airplane"
          animate={{ 
            x: ['-100%', '120%'],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ✈️
        </motion.div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Discover Kerala's Hidden Treasures
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Affordable Kerala Packages • Customized Itineraries • Unforgettable Experiences
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a 
              href="#packages" 
              className="hero-cta hero-cta-primary"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Packages
            </motion.a>
            <motion.a 
              href="https://wa.me/919059323753?text=I want to book a package"
              className="hero-cta hero-cta-secondary"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>↓</span>
        </motion.div>
      </section>

      <div className="cloud-divider"></div>

      {/* 2. About Us - Company Introduction */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-text">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About Us
              </motion.h2>
              <motion.p 
                className="about-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Welcome to Kerala Memory Travels, your trusted travel companion for exploring the enchanting beauty of God's Own Country. 
                With years of experience in crafting unforgettable journeys, we specialize in creating personalized Kerala travel experiences 
                that showcase the best of Kerala's natural wonders, rich culture, and warm hospitality. We arrange complete packages within Kerala, 
                and can also assist with travel arrangements from your city.
              </motion.p>
              <motion.p 
                className="about-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our team of local Kerala experts is passionate about sharing the hidden gems and authentic experiences that make Kerala truly special. 
                From the serene backwaters of Alleppey to the misty hills of Munnar, we ensure every moment of your journey becomes a cherished memory.
              </motion.p>
              <motion.div 
                className="about-stats"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="stat-item">
                  <h3 className="stat-number">7+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">1500+</h3>
                  <p className="stat-label">Happy Travelers</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">50+</h3>
                  <p className="stat-label">Destinations</p>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" 
                alt="About Kerala Memories" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="cloud-divider"></div>

      {/* Meet Our Founder */}
      <section className="founder-section">
        <div className="container">
          <motion.div 
            className="founder-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="founder-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/visiting.jpeg" 
                alt="Our Founder" 
              />
            </motion.div>
            <div className="founder-text">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Meet Our Founder
              </motion.h2>
              <motion.p 
                className="founder-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                With a deep passion for travel and an intimate knowledge of Kerala's hidden treasures, our founder has dedicated 
                years to creating exceptional travel experiences. Born and raised in Kerala, he understands the essence of true 
                hospitality and the importance of authentic cultural experiences.
              </motion.p>
              <motion.p 
                className="founder-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                His vision is simple: to share the magic of Kerala with travelers from around the world, ensuring every journey 
                is not just a trip, but a collection of cherished memories. Under his guidance, Kerala Memory Travels has become 
                a trusted name in personalized travel experiences.
              </motion.p>
              <motion.div 
                className="founder-quote"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="quote-text">"Every traveler deserves to experience Kerala the way locals do - with warmth, authenticity, and unforgettable moments."</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="cloud-divider"></div>

      {/* 3. Why Choose Us - Key Benefits */}
      <section className="why-us-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Kerala Memories
          </motion.h2>
          <div className="why-us-grid">
            {[
              {
                icon: "🗺️",
                title: "Local Kerala Experts",
                description: "Born and raised in Kerala — we know every hidden gem and authentic experience."
              },
              {
                icon: "✨",
                title: "Customizable Packages",
                description: "Every trip tailored to your pace, budget, and interests within Kerala."
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                description: "Clear package costs. Optional travel arrangements from your city available."
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description: "We're just a call or message away throughout your Kerala journey."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="why-us-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="why-us-icon">{item.icon}</div>
                <h3 className="why-us-title">{item.title}</h3>
                <p className="why-us-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="cloud-divider"></div>

      {/* 4. Parallax Break - Visual Impact */}
      <section className="parallax-section">
        <div className="parallax-overlay"></div>
        <motion.div 
          className="parallax-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="parallax-title">Experience God's Own Country</h2>
          <p className="parallax-subtitle">Where every moment becomes a memory</p>
        </motion.div>
      </section>

      {/* 5. Tour Packages - Main Offerings */}
      <section id="packages" className="packages-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tour Packages
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore Kerala with Our Curated Packages
          </motion.p>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard package={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="cloud-divider"></div>

      {/* 6. Signature Experience - Featured Offering */}
      <section className="signature-section">
        <div className="container">
          <motion.div 
            className="signature-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="signature-text">
              <span className="signature-label">Signature Experience</span>
              <h2 className="signature-title">The Houseboat Experience</h2>
              <p className="signature-description">
                Drift along the tranquil backwaters of Alleppey aboard a traditional Kerala kettuvallam. 
                Our premium houseboats feature air-conditioned bedrooms, open-air lounges, and freshly 
                prepared Kerala cuisine — served as the world's most beautiful landscapes glide past your window.
              </p>
              <ul className="signature-features">
                <li>✓ Private luxury houseboats for couples & families</li>
                <li>✓ Authentic Kerala meals prepared onboard</li>
                <li>✓ Sunrise & sunset cruises through palm-lined canals</li>
                <li>✓ Professional crew & 24/7 support</li>
              </ul>
              <motion.a 
                href="https://wa.me/919059323753?text=I'm interested in booking a houseboat experience"
                className="signature-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Houseboat
              </motion.a>
            </div>
            <motion.div 
              className="signature-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80" 
                alt="Kerala Houseboat" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="cloud-divider"></div>

      {/* 7. Parallax Break - Visual Transition */}
      <section className="parallax-section parallax-section-2">
        <div className="parallax-overlay"></div>
        <motion.div 
          className="parallax-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="parallax-title">Discover Hidden Gems</h2>
          <p className="parallax-subtitle">Authentic experiences crafted just for you</p>
        </motion.div>
      </section>

      {/* 8. Services - Detailed Offerings */}
      <section className="services-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Curated Kerala Experiences
          </motion.p>
          <div className="services-grid">
            {[
              {
                icon: "🚢",
                title: "Houseboat Experiences",
                description: "Cruise the enchanting backwaters of Alleppey on a traditional Kerala houseboat with world-class amenities."
              },
              {
                icon: "⛰️",
                title: "Hill Stations",
                description: "Explore the misty tea gardens of Munnar and the wild beauty of Wayanad's verdant hills."
              },
              {
                icon: "🏖️",
                title: "Beaches",
                description: "Soak in the sun at Varkala's cliffside shores and the iconic Kovalam lighthouse beach."
              },
              {
                icon: "🦁",
                title: "Wildlife & Nature Tours",
                description: "Encounter elephants in Periyar, exotic birds in Kumarakom, and the dense forests of Silent Valley."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="service-icon"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="cloud-divider"></div>

      {/* 9. Testimonials - Social Proof */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Travelers Say
          </motion.h2>
          <div className="testimonials-grid">
            {[
              { rating: "⭐⭐⭐⭐⭐", text: "Amazing Kerala trip! Everything was well organized and the places were breathtaking.", author: "Priya S." },
              { rating: "⭐⭐⭐⭐⭐", text: "Araku Valley was stunning! Great value for money and friendly service.", author: "Rajesh K." },
              { rating: "⭐⭐⭐⭐⭐", text: "Goa trip was fantastic! Beach resort was beautiful and food was delicious.", author: "Sneha M." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="testimonial-rating">{testimonial.rating}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
      <FloatingWhatsApp />
      <QuickNav />
    </div>
  );
}

export default Home;
