import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Kerala Memory Travels" className="logo-image" />
          <span className="logo-text">Kerala Memory Travels</span>
        </Link>
        
        <nav className="nav desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#packages" className="nav-link">Packages</a>
          <a href="https://wa.me/918143724405" className="nav-link cta">Contact Us</a>
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
            <a href="https://wa.me/918143724405" className="nav-link cta" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
