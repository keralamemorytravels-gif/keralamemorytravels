import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <motion.div className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>We're here to help plan your perfect trip</p>
        </motion.div>
      </div>

      <div className="container contact-container">

        <div className="contact-grid">

          {/* Contact Info */}
          <motion.div className="contact-info"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2>Get In Touch</h2>
            <p>Have questions about our packages? Want to customize your trip? Reach out to us anytime — we're happy to help!</p>

            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h3>WhatsApp / Phone</h3>
                <a href="https://wa.me/919059323753" target="_blank" rel="noopener noreferrer">+91 9059323753</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📸</span>
              <div>
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/kerala_memory_travels" target="_blank" rel="noopener noreferrer">@kerala_memory_travels</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>Kerala, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h3>Working Hours</h3>
                <p>Mon – Sun: 9:00 AM – 9:00 PM</p>
              </div>
            </div>

            <a href="https://wa.me/919059323753?text=Hi, I want to enquire about a travel package"
              className="whatsapp-contact-btn" target="_blank" rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Quick Enquiry */}
          <motion.div className="contact-form-box"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2>Quick Enquiry</h2>
            <p>Tell us where you want to go and we'll get back to you!</p>

            <div className="enquiry-options">
              {[
                { destination: '🌴 Kerala', msg: 'Hi, I want to enquire about Kerala tour packages.' },
                { destination: '🏖️ Goa', msg: 'Hi, I want to enquire about Goa tour packages.' },
                { destination: '🏝️ Lakshadweep', msg: 'Hi, I want to enquire about Lakshadweep tour packages.' },
                { destination: '🏔️ Darjeeling', msg: 'Hi, I want to enquire about Darjeeling tour packages.' },
              ].map((item, i) => (
                <a key={i}
                  href={`https://wa.me/919059323753?text=${encodeURIComponent(item.msg)}`}
                  className="enquiry-btn" target="_blank" rel="noopener noreferrer"
                >
                  {item.destination} Package
                </a>
              ))}
            </div>

            <div className="contact-note">
              <p>📋 <strong>What to share when you contact us:</strong></p>
              <ul>
                <li>Your preferred destination</li>
                <li>Travel dates</li>
                <li>Number of travelers</li>
                <li>Budget range</li>
                <li>Any special requirements</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section className="contact-faq"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { q: 'How do I book a package?', a: 'Simply click the "Book Now" button on any package or WhatsApp us at 9059323753. We will help you customize and confirm your booking.' },
              { q: 'Can I customize the itinerary?', a: 'Yes! All our packages are fully customizable. You can add, remove, or modify destinations based on your preferences.' },
              { q: 'What is included in the package price?', a: 'Package prices typically include accommodation, meals (as specified), transport within Kerala, sightseeing, and a local guide.' },
              { q: 'Do you arrange flights/trains from my city?', a: 'We primarily handle packages within Kerala and other destinations. Travel from your city can be arranged separately at additional cost.' },
              { q: 'What is the cancellation policy?', a: 'Cancellation policies vary by package. Please contact us on WhatsApp for details about the specific package you are interested in.' },
              { q: 'Do you offer group discounts?', a: 'Yes! We offer special discounts for groups of 5 or more travelers. Contact us for customized group pricing.' },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>❓ {faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default ContactUs;
