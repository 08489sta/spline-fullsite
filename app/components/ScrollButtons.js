'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ScrollButtons.module.css';

export default function ScrollButtons({ onScroll }) {
  const [showButtons, setShowButtons] = useState(false);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setShowButtons(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Start continuous scroll on mousedown/touchstart
  const startScroll = (deltaY) => {
    if (scrollInterval.current) return;
    onScroll(deltaY);
    scrollInterval.current = setInterval(() => {
      onScroll(deltaY);
    }, 20); // 20ms for smoothness
  };

  // Stop continuous scroll on mouseup/touchend/leave
  const stopScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  if (!showButtons) return null;

  return (
    <div className={styles.scrollButtons}>
      <button
        className={styles.scrollButton}
        onMouseDown={() => startScroll(-10)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        onTouchStart={() => startScroll(-10)}
        onTouchEnd={stopScroll}
        aria-label="Scroll up"
      >
        ↑
      </button>
      <button
        className={styles.scrollButton}
        onMouseDown={() => startScroll(10)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        onTouchStart={() => startScroll(10)}
        onTouchEnd={stopScroll}
        aria-label="Scroll down"
      >
        ↓
      </button>
    </div>
  );
} 