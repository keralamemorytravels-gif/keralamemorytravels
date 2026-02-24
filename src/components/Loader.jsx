import { motion } from 'framer-motion';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-sky">
        <motion.div 
          className="loader-plane"
          initial={{ x: -100, y: 50, rotate: -20 }}
          animate={{ 
            x: window.innerWidth + 100, 
            y: -200, 
            rotate: 20 
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          ✈️
        </motion.div>
      </div>
      <motion.p 
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Preparing your journey...
      </motion.p>
    </div>
  );
}

export default Loader;
