import styles from './Footer.module.css';
import Button from '../Button';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
            {/* Column 1 */}
            <div className={styles.column}>
                <div className={styles.logo}>
                    <Image 
                        src="/images/logo_white.svg" 
                        width={200}
                        height={80}
                        alt="Halberd" 
                    />
                </div>
                <div className={styles.copyright}>
                    <p>© 2025 all rights reserved.</p>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://halberd.ca" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/images/x_logo.svg" 
                            width={40}
                            height={40}
                            alt="Halberd X" 
                        />
                    </a>
                    <a href="https://halberd.ca" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/images/youtube_logo.svg" 
                            width={50}
                            height={50}
                            alt="Halberd Youtuber" 
                        />
                    </a>
                    <a href="https://halberd.ca" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/images/facebook_logo.svg" 
                            width={50}
                            height={50}
                            alt="Halberd Facebook" 
                        />
                    </a>
                </div>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>NAVIGATION</h3>
            <div className={styles.linksContainer}>
              <a href="#" className={styles.footerLink}>Our Team</a>
              <a href="#" className={styles.footerLink}>Resources</a>
              <a href="#" className={styles.footerLink}>Areas Of Practice</a>
              <a href="#" className={styles.footerLink}>Contact Us</a>
            </div>
          </div>

          {/* Column 3 */}
            <div className={styles.column}>
                <h3 className={styles.columnHeader}>INFORMATION</h3>
                <div className={styles.linksContainer}>
                <a href="#" className={styles.footerLink}>Privacy Policy</a>
                <a href="#" className={styles.footerLink}>Terms of Use</a>
                <a href="#" className={styles.footerLink}>Cookie Policy</a>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}