import styles from './HalberdMethod.module.css';
import Image from 'next/image';

export default function HalberdMethod() {
  return (
    <section className={styles.methodSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>HOW DO WE DO IT?</p>
          <h2 className={styles.title}>THE HALBERD METHOD</h2>
        </div>

        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <p className={styles.serviceSubtitle}>HOMEPAGE HELP</p>
              <h3 className={styles.serviceTitle}>For single-page websites</h3>
            </div>
            <p className={styles.serviceDescription}>
              Succinct, to-the-point homepage for seamless conversions and quick customer journeys.
            </p>
            <div className={styles.mockup}>
              <Image 
                src="/images/single-page-mockup.png" 
                width={300}
                height={200}
                alt="Single page website mockup"
                className={styles.mockupImage}
              />
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <p className={styles.serviceSubtitle}>REVITALIZED WEBSITE</p>
              <h3 className={styles.serviceTitle}>For multi-page websites</h3>
            </div>
            <p className={styles.serviceDescription}>
              Build trust and dissipate customer doubts with clean, user-friendly website sections. Ideal for startups that serve highly curious demographics.
            </p>
            <div className={styles.mockup}>
              <Image 
                src="/images/multi-page-mockup.png" 
                width={300}
                height={200}
                alt="Multi-page website mockup"
                className={styles.mockupImage}
              />
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <p className={styles.serviceSubtitle}>GROWTH STAGE STARTUP</p>
              <h3 className={styles.serviceTitle}>For startups gearing up for growth</h3>
            </div>
            <p className={styles.serviceDescription}>
              Build trust, capture attention, and walk away with a polished look for your business's new chapter.
            </p>
            <div className={styles.mockup}>
              <Image 
                src="/images/startup-mockup.png" 
                width={300}
                height={200}
                alt="Growth stage startup website mockup"
                className={styles.mockupImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}