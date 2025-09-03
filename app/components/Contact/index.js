import styles from './Contact.module.css';
import Button from '../Button';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.backgroundLogo}>
          <Image 
            src="/images/halberd.svg" 
            width={300}
            height={300}
            alt="Halberd Logo Background"
            className={styles.logoImage}
          />
        </div>
        
        <div className={styles.content}>
          <p className={styles.subtitle}>LETS TALK</p>
          <h2 className={styles.title}>
            GET IN TOUCH WITH SOME OF THE INDUSTRY'S FINEST
          </h2>
          <Button variant="primary" className={styles.contactButton}>
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  );
}