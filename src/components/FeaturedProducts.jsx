import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: true
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.2,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w-400&h=400&fit=crop",
    category: "Fashion",
    isSale: true
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: true
  },
  {
    id: 4,
    name: "Home Speaker",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.4,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
    category: "Electronics",
    isSale: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Featured Products</h2>
          <p className="text-muted">Discover our most popular items</p>
        </div>
        
        <Row>
          {products.map((product) => (
            <Col key={product.id} lg={3} md={6} className="mb-4">
              <Card className="product-card h-100 border-0 shadow-sm hover-shadow">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    className="product-image"
                  />
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    className="position-absolute top-0 end-0 m-2 rounded-circle"
                  >
                    <Heart size={18} />
                  </Button>
                  {product.isNew && (
                    <Badge bg="success" className="position-absolute top-0 start-0 m-2">
                      New
                    </Badge>
                  )}
                  {product.isSale && (
                    <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                      Sale
                    </Badge>
                  )}
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <small className="text-muted mb-1">{product.category}</small>
                  <Card.Title className="fw-semibold">
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                      {product.name}
                    </Link>
                  </Card.Title>
                  
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-warning d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <small className="text-muted ms-2">({product.reviews})</small>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div>
                      <span className="h5 fw-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-muted text-decoration-line-through ms-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button variant="primary" size="sm">
                      <ShoppingBag size={18} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Button variant="outline-primary" size="lg" as={Link} to="/products">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;