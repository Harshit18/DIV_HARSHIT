'use client';
import Link from 'next/link';
import '../app/globals.css'; // Make sure this path matches your actual file structure

export default function HomePage() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 className="display-4">Welcome</h1>
        <p className="lead">Your Gateway To The Luxury Garage</p>
        <Link href="/products" className="btn btn-primary" style={{ maxWidth: '200px', margin: '1rem auto', display: 'block' }}>
          Shop Now
        </Link>
      </section>

      
      {/* Featured Categories */}
      <section style={{ marginBottom: '3rem' }}>
       <h2>Featured Categories</h2>
<ul className="list-group">
  <li className="list-group-item">🚗 Executive Sedans – Mercedes-Benz S-Class, BMW 7 Series, Audi A8</li>
  <li className="list-group-item">🏎️ Supercars – Ferrari 488, Lamborghini Huracán, McLaren 720S</li>
  <li className="list-group-item">🚙 Luxury SUVs – Range Rover Autobiography, Bentley Bentayga, Rolls-Royce Cullinan</li>
  <li className="list-group-item">🛠️ Custom Builds & Tuned Rides – Brabus, Mansory, Novitec</li>
</ul>
      </section>

      {/* Call to Action */}
      <Link
  href="/signin"
  className="btn btn-dark"
  style={{ maxWidth: '200px', margin: '1rem auto', display: 'block' }}
>
  Sign In
</Link>
    </main>
  );
}