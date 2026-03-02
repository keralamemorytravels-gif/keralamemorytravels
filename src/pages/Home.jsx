import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PackageCard from '../components/PackageCard';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import QuickNav from '../components/QuickNav';
import { packages, signatureExperiences } from '../data/packages';
import './Home.css';

// Signature Carousel Component
function SignatureCarousel({ experiences }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="signature-carousel">
      <div 
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          ‹
        </button>
        
        <div className="carousel-track">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 0.8,
                x: `${(index - currentIndex) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="signature-card-carousel">
                <div className="signature-image-carousel">
                  <img src={exp.image} alt={exp.name} />
                  <div className="signature-overlay-carousel">
                    <span className="signature-icon-carousel">{exp.icon}</span>
                  </div>
                </div>
                <div className="signature-content-carousel">
                  <h3 className="signature-title-carousel">{exp.name}</h3>
                  <p className="signature-description-carousel">{exp.description}</p>
                  <span className="premium-badge-carousel">Premium Experience</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="carousel-dots">
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  // Group packages by destination
  const keralaPackages = packages.filter(pkg => pkg.isKerala);
  const goaPackages = packages.filter(pkg => pkg.packageType === 'goa');
  const comingSoonPackages = packages.filter(pkg => 
    pkg.packageType === 'darjeeling' || 
    pkg.packageType === 'chikmagalur' || 
    pkg.packageType === 'rajasthan'
  );

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
      <section id="packages" className="packages-section kerala-packages-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🌴 Kerala Packages
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore God's Own Country with Our Curated Kerala Packages
          </motion.p>

          <div className="packages-grid">
            {keralaPackages.map((pkg, index) => (
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

      {/* Goa Packages Section */}
      <section className="packages-section goa-packages-section">
        <div className="container">
          <motion.h2 
            className="section-title section-title-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🏖️ Goa Packages
          </motion.h2>
          <motion.p 
            className="section-subtitle section-subtitle-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Beach Paradise - Sun, Sand & Endless Fun
          </motion.p>

          <div className="packages-grid">
            {goaPackages.map((pkg, index) => (
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

      {/* Coming Soon Destinations Section */}
      {comingSoonPackages.length > 0 && (
        <>
          <section className="packages-section coming-soon-packages-section">
            <div className="container">
              <motion.h2 
                className="section-title section-title-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                🚀 Coming Soon Destinations
              </motion.h2>
              <motion.p 
                className="section-subtitle section-subtitle-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Exciting New Destinations - Stay Tuned!
              </motion.p>

              <div className="packages-grid">
                {comingSoonPackages.map((pkg, index) => (
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
        </>
      )}

      <div className="cloud-divider"></div>

      {/* Signature Experiences */}
      <section className="signature-experiences-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ✨ Signature Experiences
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium Exclusive Experiences
          </motion.p>
          
          <SignatureCarousel experiences={signatureExperiences} />
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
