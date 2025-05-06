'use client';

import { useState, useEffect } from 'react';
import styles from './MobileToggle.module.css';

export default function MobileToggle() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
    // Update the Spline scene view
    const canvas = document.querySelector('canvas');
    if (canvas) {
      if (!isMobile) {
        // Mobile view: zoom in and center
        canvas.style.transform = 'scale(1.2) translateY(10%)';
        canvas.style.transformOrigin = 'center top';
      } else {
        // Desktop view: reset
        canvas.style.transform = 'none';
      }
    }
  };

  return (
    <button 
      className={styles.mobileToggle}
      onClick={toggleMobile}
      aria-label={isMobile ? "Switch to Desktop View" : "Switch to Mobile View"}
      style={{
        transform: isMobile ? 'scale(0.5)' : 'none',
        transformOrigin: 'bottom right',
        bottom: isMobile ? '15px' : '20px',
        right: isMobile ? '15px' : '20px'
      }}
    >
      {isMobile ? "Desktop Version" : "Mobile Version"}
    </button>
  );
} 