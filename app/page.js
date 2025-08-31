import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-display">Font Typography Demo</h1>
        
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="text-h1">Matteo Font Family</h2>
          <h3 className="text-h2">Heading Level 2 (H2)</h3>
          <h4 className="text-h3">Heading Level 3 (H3)</h4>
          <h5 className="text-h4">Heading Level 4 (H4)</h5>
          <h6 className="text-h5">Heading Level 5 (H5)</h6>
          <p className="text-h6">Heading Level 6 (H6/Label)</p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 className="text-h2">Source Sans Pro Font Family</h2>
          <p className="text-lead">This is lead text - slightly larger than body text for introductory paragraphs and important content that needs emphasis.</p>
          <p className="text-base">This is base/body text - the default text size used for regular paragraph content throughout the application.</p>
          <p className="text-small">This is small text - used for captions, labels, and secondary information that doesn&apos;t need as much visual prominence.</p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 className="text-h3">Mixed Typography Example</h2>
          <h3 className="text-h4">Article Title</h3>
          <p className="text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. This lead paragraph introduces the main content.</p>
          <p className="text-base">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="text-base">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="text-small">Published on August 31, 2025 | 5 min read</p>
        </div>

        <div>
          <h2 className="text-h3">All Font Weights</h2>
          <p className="text-h4" style={{ fontWeight: 700 }}>Matteo Bold (700)</p>
          <p className="text-h4" style={{ fontWeight: 400 }}>Matteo Regular (400)</p>
          <p className="text-base" style={{ fontWeight: 700 }}>Source Sans Pro Bold (700)</p>
          <p className="text-base" style={{ fontWeight: 400 }}>Source Sans Pro Regular (400)</p>
        </div>
      </main>
    </div>
  );
}
