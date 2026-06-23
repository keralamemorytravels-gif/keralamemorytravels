import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <motion.div className="privacy-hero-content"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <h1>Privacy Policy</h1>
          <p>Last updated: June 2025</p>
        </motion.div>
      </div>

      <div className="container privacy-container">
        <motion.div className="privacy-content"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <section className="privacy-section">
            <h2>1. Introduction</h2>
            <p>Welcome to Kerala Memory Travels ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website <strong>keralamemorytravels.in</strong> or contact us for travel services.</p>
          </section>

          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, email address when you contact us or book a package.</li>
              <li><strong>Travel Preferences:</strong> Travel dates, destinations, number of travelers, and special requirements you share with us.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
              <li><strong>Communication Data:</strong> Messages sent to us via WhatsApp, email, or any other channel.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and manage your travel bookings and enquiries</li>
              <li>Provide personalized travel recommendations and packages</li>
              <li>Communicate with you about your bookings and travel plans</li>
              <li>Send you updates about new packages and travel offers (with your consent)</li>
              <li>Improve our website and services based on your feedback</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Hotels, resorts, and transport partners necessary to fulfill your booking.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> In case of a merger or acquisition, your data may be transferred with appropriate notice.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="privacy-section">
            <h2>6. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us:</p>
            <ul>
              <li>Remember your preferences</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide relevant content and advertisements</li>
            </ul>
            <p>You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.</p>
          </section>

          <section className="privacy-section">
            <h2>7. Google AdSense</h2>
            <p>We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and similar technologies to serve ads based on your visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.</p>
          </section>

          <section className="privacy-section">
            <h2>8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites (such as WhatsApp, Instagram). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any personal information.</p>
          </section>

          <section className="privacy-section">
            <h2>9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>10. Children's Privacy</h2>
            <p>Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
          </section>

          <section className="privacy-section">
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically.</p>
          </section>

          <section className="privacy-section">
            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <div className="privacy-contact">
              <p>📱 <strong>WhatsApp / Phone:</strong> <a href="https://wa.me/919059323753">+91 9059323753</a></p>
              <p>📸 <strong>Instagram:</strong> <a href="https://www.instagram.com/kerala_memory_travels" target="_blank" rel="noopener noreferrer">@kerala_memory_travels</a></p>
              <p>🌐 <strong>Website:</strong> <a href="https://keralamemorytravels.in">keralamemorytravels.in</a></p>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
