'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './BottomNavbar.module.css';

const BottomNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show navbar immediately when user starts scrolling
      setIsVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.bottomNavbar} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/images/halberd-logo-one-line.svg" 
            width={127}
            height={20}
            alt="Halberd" 
          />
        </div>
        
        <div className={styles.navLinks}>
          <a href="#before-after" className={styles.navLink}>
            Before/After
          </a>
          <a href="#trusted-partners" className={styles.navLink}>
            Trusted Partners
          </a>
          <a href="#pricing" className={styles.navLink}>
            Pricing
          </a>
        </div>
        
        <button className={styles.contactButton}>
          Get In Touch
        </button>
      </div>
    </nav>
  );
};

export default BottomNavbar;