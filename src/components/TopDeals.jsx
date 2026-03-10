import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './TopDeals.css';

// Sample deals data with image URLs (free placeholder images)
const dealsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    rating: 4.5,
    reviews: 124,
    currentPrice: 89.99,
    originalPrice: 129.99,
    discount: 31,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&auto=format",
    badge: "New"
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    category: "Fashion",
    rating: 4.0,
    reviews: 89,
    currentPrice: 24.99,
    originalPrice: 39.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop&auto=format",
    badge: "Sale"
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    rating: 4.5,
    reviews: 256,
    currentPrice: 199.99,
    originalPrice: 299.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&auto=format"
  },
  {
    id: 4,
    name: "Home Speaker",
    category: "Electronics",
    rating: 4.0,
    reviews: 67,
    currentPrice: 149.99,
    originalPrice: 199.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop&auto=format"
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Fashion",
    rating: 4.5,
    reviews: 178,
    currentPrice: 79.99,
    originalPrice: 129.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop&auto=format",
    badge: "Hot"
  },
  {
    id: 6,
    name: "Backpack",
    category: "Accessories",
    rating: 4.0,
    reviews: 92,
    currentPrice: 49.99,
    originalPrice: 79.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop&auto=format"
  },
  {
    id: 7,
    name: "Sunglasses",
    category: "Accessories",
    rating: 4.5,
    reviews: 145,
    currentPrice: 159.99,
    originalPrice: 249.99,
    discount: 36,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop&auto=format",
    badge: "Sale"
  },
  {
    id: 8,
    name: "Laptop",
    category: "Electronics",
    rating: 5.0,
    reviews: 312,
    currentPrice: 899.99,
    originalPrice: 1199.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop&auto=format"
  },
  // ===== ELECTRONICS =====
  
  {
    id: 4,
    name: "Gaming Laptop",
    category: "Electronics",
    rating: 5.0,
    reviews: 312,
    currentPrice: 1299.99,
    originalPrice: 1599.99,
    discount: 19,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=200&fit=crop&auto=format",
    badge: "Hot"
  },
  {
    id: 5,
    name: "4K Smart TV",
    category: "Electronics",
    rating: 4.5,
    reviews: 189,
    currentPrice: 499.99,
    originalPrice: 699.99,
    discount: 29,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop&auto=format"
  },
  {
    id: 6,
    name: "Tablet Pro",
    category: "Electronics",
    rating: 4.5,
    reviews: 156,
    currentPrice: 449.99,
    originalPrice: 599.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop&auto=format",
    badge: "New"
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    category: "Electronics",
    rating: 4.0,
    reviews: 432,
    currentPrice: 79.99,
    originalPrice: 129.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop&auto=format",
    badge: "Bestseller"
  },
  {
    id: 8,
    name: "Gaming Console",
    category: "Electronics",
    rating: 5.0,
    reviews: 278,
    currentPrice: 449.99,
    originalPrice: 499.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=300&h=200&fit=crop&auto=format"
  },
  {
    id: 9,
    name: "DSLR Camera",
    category: "Electronics",
    rating: 4.5,
    reviews: 145,
    currentPrice: 599.99,
    originalPrice: 799.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop&auto=format",
    badge: "Sale"
  },
  {
    id: 10,
    name: "Fitness Tracker",
    category: "Electronics",
    rating: 4.0,
    reviews: 324,
    currentPrice: 69.99,
    originalPrice: 99.99,
    discount: 30,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=300&h=200&fit=crop&auto=format"
  },
  {
    id: 11,
    name: "Portable Charger",
    category: "Electronics",
    rating: 4.5,
    reviews: 567,
    currentPrice: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=200&fit=crop&auto=format",
    badge: "Bestseller"
  }
];

const TopDeals = () => {
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-warning" />);
    }
    
    return stars;
  };

  return (
    <section className="top-deals-section py-5">
      <Container>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">🔥 Top Deals Today</h2>
            <p className="text-muted">Limited time offers with best discounts</p>
          </div>
          <Button variant="outline-primary" className="fw-bold px-4">
            View All <i className="bi bi-arrow-right ms-2"></i>
          </Button>
        </div>

        {/* Deals Grid */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {dealsData.map((deal) => (
            <Col key={deal.id}>
              <Card className="deal-card h-100 border-0 shadow-sm">
                {/* Badge */}
                {deal.badge && (
                  <Badge 
                    bg={deal.badge === "New" ? "success" : deal.badge === "Hot" ? "danger" : "warning"} 
                    className="position-absolute top-0 start-0 m-3 px-3 py-2"
                  >
                    {deal.badge}
                  </Badge>
                )}
                
                {/* Discount Badge */}
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 end-0 m-3 px-3 py-2 text-white fw-bold"
                >
                  -{deal.discount}%
                </Badge>

                {/* Product Image */}
                <div className="deal-image-container p-3 text-center">
                  <Card.Img 
                    variant="top" 
                    src={deal.image} 
                    alt={deal.name}
                    className="deal-image"
                    style={{ height: '180px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>

                <Card.Body className="text-center">
                  {/* Category */}
                  <small className="text-muted text-uppercase mb-2 d-block">
                    {deal.category}
                  </small>

                  {/* Product Name */}
                  <Card.Title className="h6 fw-bold mb-2">
                    {deal.name}
                  </Card.Title>

                  {/* Rating */}
                  <div className="mb-2">
                    <span className="me-2">
                      {renderStars(deal.rating)}
                    </span>
                    <small className="text-muted">({deal.reviews})</small>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="h5 fw-bold text-primary me-2">
                      ${deal.currentPrice}
                    </span>
                    <small className="text-muted text-decoration-line-through">
                      ${deal.originalPrice}
                    </small>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-100 fw-bold"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Countdown Timer Banner */}
        <div className="deals-timer-banner bg-light rounded-3 p-4 mt-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h5 className="fw-bold mb-2">⏰ Hurry! These deals won't last long</h5>
              <p className="text-muted mb-md-0">Limited stock available at discounted prices</p>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-md-end align-items-center gap-4">
                <div className="text-center">
                  <div className="h4 fw-bold text-primary mb-0">02</div>
                  <small>Days</small>
                </div>
                <div className="text-center">
                  <div className="h4 fw-bold text-primary mb-0">12</div>
                  <small>Hours</small>
                </div>
                <div className="text-center">
                  <div className="h4 fw-bold text-primary mb-0">45</div>
                  <small>Mins</small>
                </div>
                <div className="text-center">
                  <div className="h4 fw-bold text-primary mb-0">30</div>
                  <small>Secs</small>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* View All Button Mobile */}
        <div className="text-center mt-4 d-md-none">
          <Button variant="outline-primary" className="fw-bold px-5">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TopDeals;