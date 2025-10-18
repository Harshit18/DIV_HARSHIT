export default function About() {
  return (
    <div className="main-content">
      <h1>About LuxDrive</h1>
      <div style={{ lineHeight: '1.8', maxWidth: '800px' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Welcome to LuxDrive — your premier destination for luxury automobiles, bespoke experiences, and elite automotive lifestyle. We curate the finest vehicles and services for connoisseurs who demand excellence.
        </p>

        <h2 style={{ margin: '2rem 0 1rem 0', color: '#2c3e50' }}>Our Legacy</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Founded by automotive enthusiasts, LuxDrive began with a vision to redefine luxury mobility in India. From European masterpieces to custom-tuned marvels, we deliver elegance on wheels.
        </p>

        <h2 style={{ margin: '2rem 0 1rem 0', color: '#2c3e50' }}>What We Offer</h2>
        <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
          <li>✅ Flagship Sedans & Supercars</li>
          <li>✅ Certified Pre-Owned Luxury Vehicles</li>
          <li>✅ Personalized Test Drive Experiences</li>
          <li>✅ Nationwide Delivery & Concierge Services</li>
          <li>✅ Transparent Financing & Insurance Options</li>
          <li>✅ Dedicated Lifestyle Advisors</li>
        </ul>

        <h2 style={{ margin: '2rem 0 1rem 0', color: '#2c3e50' }}>Payment & Delivery</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We accept premium payment modes including NEFT, RTGS, credit cards, and luxury financing plans. Vehicles are delivered within 7–14 days, with white-glove service available in select cities.
        </p>
      </div>
    </div>
  );
}