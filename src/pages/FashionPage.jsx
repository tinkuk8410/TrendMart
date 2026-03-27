import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FashionPage.css';

const FashionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories'];

  const products = [
    { id: 1, name: 'Classic Denim Jacket', category: 'Men', price: 2499, originalPrice: 3999, rating: 4.5, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300&h=400&fit=crop' },
    { id: 2, name: 'Floral Summer Dress', category: 'Women', price: 1899, originalPrice: 2999, rating: 4.3, image: 'https://images.unsplash.com/photo-1612336307429-8e898d5e3f02?w=300&h=400&fit=crop' },
    { id: 3, name: 'Graphic T-Shirt', category: 'Kids', price: 799, originalPrice: 1299, rating: 4.0, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop' },
    { id: 4, name: 'Leather Crossbody Bag', category: 'Accessories', price: 1499, originalPrice: 2499, rating: 4.6, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=400&fit=crop' },
    { id: 5, name: 'Slim Fit Jeans', category: 'Men', price: 2999, originalPrice: 4999, rating: 4.4, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop' },
    { id: 6, name: 'Elegant Blazer', category: 'Women', price: 4499, originalPrice: 6999, rating: 4.7, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop' },
    { id: 7, name: 'Sports Shoes', category: 'Kids', price: 1799, originalPrice: 2799, rating: 4.2, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop' },
    { id: 8, name: 'Silver Necklace', category: 'Accessories', price: 999, originalPrice: 1999, rating: 4.5, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=400&fit=crop' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevents triggering product click
    setCartCount(prev => prev + 1);
    setShowCartToast(true);
    setTimeout(() => setShowCartToast(false), 2000);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // You can open a modal or navigate to product detail page
    alert(`Viewing details for ${product.name}\nPrice: ${formatPrice(product.price)}\nClick "Buy Now" to proceed to checkout`);
  };

  const handleBuyNow = () => {
    if (selectedProduct) {
      alert(`Proceeding to checkout for ${selectedProduct.name}`);
      setSelectedProduct(null);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="fashion-page">
      {/* Hero Banner - Flipkart Style */}
      <div className="hero-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h1>Fashion Collection 2026</h1>
              <p>Up to 70% off on latest trends</p>
              <button className="shop-now-btn">Shop Now →</button>
            </div>
            <div className="banner-image">
              <div className="offer-badge">🔥 Limited Time Offer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Zone - Flipkart's Signature Section */}
      <div className="deal-zone">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🔥 Deal of the Day</h2>
            <div className="timer">
              <span>Ends in: </span>
              <span className="timer-digits">02 : 15 : 34</span>
            </div>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="deal-products">
            {products.slice(0, 4).map(product => (
              <div key={product.id} className="deal-card" onClick={() => handleProductClick(product)}>
                <img src={product.image} alt={product.name} />
                <div className="deal-price">
                  <span className="current">{formatPrice(product.price)}</span>
                  <span className="original">{formatPrice(product.originalPrice)}</span>
                  <span className="discount">{Math.round((1 - product.price/product.originalPrice) * 100)}% off</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Highlights - Circular Icons */}
      <div className="category-highlights">
        <div className="container">
          <div className="category-grid">
            {/* All Category Circle */}
            <div 
              className={`category-circle ${selectedCategory === 'All' ? 'active' : ''}`} 
              onClick={() => setSelectedCategory('All')}
            >
              <div className="circle-icon">✨</div>
              <span>All</span>
            </div>
            {/* Other Categories */}
            {categories.slice(1).map(cat => (
              <div 
                key={cat} 
                className={`category-circle ${selectedCategory === cat ? 'active' : ''}`} 
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="circle-icon">
                  {cat === 'Men' && '👔'}
                  {cat === 'Women' && '👗'}
                  {cat === 'Kids' && '🧸'}
                  {cat === 'Accessories' && '👜'}
                </div>
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Products Grid */}
      <div className="container main-content">
        {/* Products Grid */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="product-card" onClick={() => handleProductClick(product)}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="wishlist-icon" onClick={(e) => {
                    e.stopPropagation();
                    alert(`❤️ Added ${product.name} to wishlist!`);
                  }}>❤️</div>
                  <div className="offer-tag">{Math.round((1 - product.price/product.originalPrice) * 100)}% off</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="rating">
                    <span className="stars">★ {product.rating}</span>
                    <span className="reviews">(1.2k reviews)</span>
                  </div>
                  <div className="price-section">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  </div>
                  <div className="product-buttons">
                    <button className="add-to-cart" onClick={(e) => handleAddToCart(product, e)}>
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal - Buy Now appears here */}
      {selectedProduct && (
        <div className="product-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-info">
              <h2>{selectedProduct.name}</h2>
              <div className="modal-rating">
                <span className="stars">★ {selectedProduct.rating}</span>
                <span className="reviews">(1.2k reviews)</span>
              </div>
              <div className="modal-price">
                <span className="current-price">{formatPrice(selectedProduct.price)}</span>
                <span className="original-price">{formatPrice(selectedProduct.originalPrice)}</span>
                <span className="discount">{Math.round((1 - selectedProduct.price/selectedProduct.originalPrice) * 100)}% off</span>
              </div>
              <p className="product-description">
                This stylish {selectedProduct.name} is perfect for any occasion. 
                Made with high-quality materials for comfort and durability.
              </p>
              <div className="modal-buttons">
                <button className="buy-now-modal" onClick={handleBuyNow}>
                  ⚡ Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showCartToast && (
        <div className="toast-notification">
          ✅ Item added to cart successfully!
        </div>
      )}
    </div>
  );
};

export default FashionPage;