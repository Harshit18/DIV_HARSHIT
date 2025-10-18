'use client';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../cart/redux/cartSlice';
import { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    price: 14500000,
    description: 'Flagship luxury sedan with cutting-edge tech and unmatched comfort',
    image: '/martin-katler-y3neNkE6efI-unsplash.jpg'
  },
  {
    id: 2,
    name: 'Ferrari 488 GTB',
    price: 38000000,
    description: 'Mid-engine supercar with blistering performance and Italian flair',
    image: '/fer.jpg'
  },
  {
    id: 3,
    name: 'Rolls-Royce Phantom',
    price: 85000000,
    description: 'The pinnacle of automotive luxury, handcrafted to perfection',
    image: '/roll.jpg'
  },
  {
    id: 4,
    name: 'Lamborghini Huracán EVO',
    price: 42000000,
    description: 'V10-powered supercar with aggressive styling and track-ready dynamics',
    image: '/lamb.jpg'
  },
  {
    id: 5,
    name: 'BMW M8 Competition',
    price: 22000000,
    description: 'High-performance grand tourer with sleek design and twin-turbo V8',
    image: '/bmw.jpg'
  },
  {
    id: 6,
    name: 'Aston Martin DB11',
    price: 34000000,
    description: 'British elegance meets power in this stunning GT coupe',
    image: '/ast.jpg'
  },
  {
    id: 7,
    name: 'Porsche 911 Turbo S',
    price: 33000000,
    description: 'Iconic sports car with everyday usability and blistering speed',
    image: '/por.jpg'
  },
  {
    id: 8,
    name: 'Bent.jpg',
    price: 37000000,
    description: 'Luxury coupe with handcrafted interiors and effortless performance',
    image: '/bent.jpg'
  }
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [isMounted, setIsMounted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAlertMessage(`${product.name} added to cart!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  if (!isMounted) {
    return (
      <div>
        <h1>Our Cars</h1>
        <p>Loading luxury vehicles...</p>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">Loading...</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      {showAlert && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#2ecc71',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}>
          {alertMessage}
        </div>
      )}

      <h1>Explore Our Luxury Car Collection</h1>
      <p>From handcrafted sedans to exotic supercars — drive your dream today.</p>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ecf0f1',
                  color: '#7f8c8d',
                  borderRadius: '4px'
                }}
              >
                {product.name}
              </div>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-price">{formatPrice(product.price)}</div>
            <button
              className={`btn ${isInCart(product.id) ? 'btn-danger' : 'btn-primary'}`}
              onClick={() => handleAddToCart(product)}
            >
              {isInCart(product.id) ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}