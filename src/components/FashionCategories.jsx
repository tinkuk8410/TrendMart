import React from 'react';
import './FashionCategories.css';

const fashionCategories = [
  {
    id: 1,
    title: "Men's Fashion",
    category: "men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop&auto=format",
    itemCount: 245,
    bgColor: "linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)",
    icon: "👔"
  },
  {
    id: 2,
    title: "Women's Fashion",
    category: "women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop&auto=format",
    itemCount: 389,
    bgColor: "linear-gradient(135deg, #C33764 0%, #1D2671 100%)",
    icon: "👗"
  },
  {
    id: 3,
    title: "Kids Fashion",
    category: "kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=300&fit=crop&auto=format",
    itemCount: 156,
    bgColor: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    icon: "🧸"
  },
  {
    id: 4,
    title: "GEN Z Fashion",
    category: "genz",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=300&fit=crop&auto=format",
    itemCount: 178,
    bgColor: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)",
    icon: "🔥",
    badge: "Trending"
  },
  {
    id: 5,
    title: "Sports Wear",
    category: "sports",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=300&fit=crop&auto=format",
    itemCount: 112,
    bgColor: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
    icon: "⚽"
  },
  {
    id: 6,
    title: "Winter Collection",
    category: "winter",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop&auto=format",
    itemCount: 93,
    bgColor: "linear-gradient(135deg, #4B79A1 0%, #283E51 100%)",
    icon: "❄️"
  }
];

const FashionCategories = () => {
  return (
    <section className="fashion-categories-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="text-muted">Discover the latest trends in men, women, kids and Gen Z fashion</p>
        </div>

        {/* Categories Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {fashionCategories.map((category) => (
            <div className="col" key={category.id}>
              <div className="card fashion-card h-100 border-0 overflow-hidden">
                <div className="fashion-image-wrapper position-relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="card-img-top fashion-image"
                  />
                  
                  {/* Title always visible at bottom */}
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 title-overlay text-center">
                    <h3 className="h5 fw-bold text-white mb-0">{category.title}</h3>
                  </div>
                  
                  {/* Hover overlay with full details */}
                  <div 
                    className="fashion-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{background: category.bgColor}}
                  >
                    <div className="overlay-content text-center text-white">
                      <span className="category-icon display-4 mb-3 d-block">{category.icon}</span>
                      <h3 className="h4 fw-bold mb-2">{category.title}</h3>
                      <p className="mb-3">{category.itemCount}+ Products</p>
                      {category.badge && (
                        <span className="trending-badge bg-white text-dark px-3 py-1 rounded-pill mb-3 d-inline-block">
                          {category.badge}
                        </span>
                      )}
                      <button className="btn btn-light btn-sm rounded-pill px-4 fw-bold">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Filters */}
        <div className="row mt-5 g-3">
          <div className="col-6 col-md-3">
            <div className="filter-pill text-center p-3 bg-light rounded-3">
              <span className="fw-bold">👔 Formal Wear</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="filter-pill text-center p-3 bg-light rounded-3">
              <span className="fw-bold">👖 Casual Wear</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="filter-pill text-center p-3 bg-light rounded-3">
              <span className="fw-bold">🎽 Sports Wear</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="filter-pill text-center p-3 bg-light rounded-3">
              <span className="fw-bold">✨ Party Wear</span>
            </div>
          </div>
        </div>

        {/* Gen Z Special Banner */}
        <div 
          className="genz-banner mt-5 p-4 rounded-4"
          style={{
            background: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)"
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3 className="text-white fw-bold mb-2">🔥 Gen Z Special: Streetwear Collection</h3>
              <p className="text-white-50 mb-md-0">Hoodies, sneakers, and accessories that define your style</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button className="btn btn-light fw-bold px-4">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionCategories;