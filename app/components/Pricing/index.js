import styles from './Pricing.module.css';
import Button from '../Button';

export default function Pricing() {
  const pricingTiers = [
    {
      subtitle: "For Single-Page Websites",
      title: "HOMEPAGE HELP",
      price: "$1.5K",
      description: "SUCCINCT, TO-THE-POINT HOMEPAGE FOR SEAMLESS CONVERSIONS AND QUICK CUSTOMER JOURNEYS.",
      features: [
        "A built-from-scratch website with a clean user interface",
        "seamless payment processing",
        "Original Figma file with all digital assets Upon Request"
      ]
    },
    {
      subtitle: "For Multi-Page Websites",
      title: "REVITALIZED WEBSITE",
      price: "$3.5K",
      description: "BUILD TRUST AND DISSIPATE CUSTOMER DOUBTS WITH CLEAN, USER-FRIENDLY WEBSITE SECTIONS. IDEAL FOR STARTUPS THAT SERVE HIGHLY CURIOUS DEMOGRAPHICS.",
      features: [
        "A built-from-scratch website with a clean user interface",
        "Seamless payment processing and built-in marketing tools (SMS, Email, Booking, etc.)",
        "Original Figma file with all digital assets",
        "Three additional trust-building pages (About, Blog, Products, etc.)",
        "Ongoing website support and maintenance for the first month after hand-off"
      ]
    },
    {
      subtitle: "For Startups Gearing Up For Growth",
      title: "GROWTH STAGE STARTUP",
      price: "$6K",
      description: "BUILD TRUST, CAPTURE ATTENTION, AND WALK AWAY WITH A POLISHED LOOK FOR YOUR BUSINESS'S NEW CHAPTER.",
      features: [
        "A built-from-scratch website with a clean user interface",
        "Seamless payment processing and built-in marketing tools (SMS, Email, SEO, etc.)",
        "Original Figma file with all digital assets",
        "7 additional trust-building pages (About, Blog, Products, etc.)",
        "Sustainable marketing growth strategy to best reach and serve your ideal client base. (A comprehensive process document included)",
        "Revitalized brand assets (typography, logos, graphics, colour palette, etc.)",
        "Social media redesign",
        "Optimized and regulation-compliant data storage strategy for all business data",
        "Ongoing website support and maintenance for the first month after hand-off"
      ]
    }
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={`${styles.subtitle} text-small`}>PRICING</p>
          <h2 className={`${styles.title} text-h2`}>PICK THE PACKAGE THAT FITS YOUR NEEDS</h2>
        </div>

        <div className={styles.pricingGrid}>
          {pricingTiers.map((tier, index) => (
            <div key={index} className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <p className={`${styles.cardSubtitle} text-small`}>{tier.subtitle}</p>
                <h3 className={`${styles.cardTitle} text-h4`}>{tier.title}</h3>
                <div className={styles.priceContainer}>
                  <span className={`${styles.price} text-h1`}>{tier.price}</span>
                </div>
                <Button variant="primary" className={styles.bookButton}>
                  Book A Call
                </Button>
              </div>

              <div className={styles.cardBody}>
                <p className={`text-base ${styles.cardDescription}`}>{tier.description}</p>
                <ul className={`text-small ${styles.featureList}`}>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}