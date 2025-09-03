import styles from "./page.module.css";
import Button from "./components/Button";
import Image from "next/image";
import PromiseStatement from "./components/PromiseStatement";
import HalberdMethod from "./components/HalberdMethod";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image 
          src="/images/logo.png" 
          width={400}
          height={400}
          alt="Halberd Solutions" 
          className={styles.logo}
        />
      </header>
      
      <main className={styles.main}>
        <div className={styles.content}>
          <p className={`text-small ${styles.tagline}`}>TRUSTED BY [MARKET&apos;S LEADERSHIP]</p>
          
          <h1 className={`text-display ${styles.hero}`}>
            FOCUS ON YOUR BUSINESS, WE&apos;LL HANDLE YOUR WEBSITE.
          </h1>
          
          <p className={`text-lead ${styles.description}`}>
            Halberd Solutions is a website development firm that provides early-stage fintech 
            startups with a polished website and memorable brand.
          </p>
          
          <div className={styles.buttonGroup}>
            <Button variant="primary">Get In Touch</Button>
            <Button variant="secondary">Business Cases</Button>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          <Image 
            src="/images/halberd.svg" 
            width={500}
            height={500}
            alt="Halberd Logo" 
          />
        </div>
      </main>
      <PromiseStatement />
      <HalberdMethod />
      <Pricing />
      <Contact />
    </div>
  );
}
