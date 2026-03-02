import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuickNav.css';

function QuickNav() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    { icon: '📦', label: 'Packages', href: '#packages' },
    { icon: '📋', label: 'How to Book', action: 'booking' },
    { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919059323753' },
    { icon: '📞', label: 'Call Now', href: 'tel:+919059323753' },
  ];

  const handleClick = (link) => {
    if (link.action === 'booking') {
      // Trigger the booking modal from Header
      document.querySelector('.nav-button')?.click();
    } else if (link.href.startsWith('http') || link.href.startsWith('tel:')) {
      window.open(link.href, link.href.startsWith('tel:') ? '_self' : '_blank');
    } else {
      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="quick-nav-mobile">
      <button 
        className={`quick-nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick Navigation"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="quick-nav-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {quickLinks.map((link, index) => (
              <motion.button
                key={index}
                className="quick-nav-item"
                onClick={() => handleClick(link)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="quick-nav-icon">{link.icon}</span>
                <span className="quick-nav-label">{link.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuickNav;
