import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FashionCategories from '../components/FashionCategories'; 
import FeaturedProducts from '../components/FeaturedProducts';
import TopDeals from '../components/TopDeals';

const Home = () => {
  return (
    <div className="home-page">
      <section className="py-2">
        <Container>
          
          <Categories />

          <HeroSection />
    
          <FashionCategories />
          
          <FeaturedProducts />

          <TopDeals />

        </Container>
      </section>

      {/* Special Offer Banner */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">Limited Time Offer!</h2>
              <p className="mb-4">
                Get 30% off on all electronics. Use code: <strong>ELECTRO30</strong>
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="text-center">
                  <div className="display-6 fw-bold">02</div>
                  <small>Days</small>
                </div>
                <div className="text-center">
                  <div className="display-6 fw-bold">12</div>
                  <small>Hours</small>
                </div>
                <div className="text-center">
                  <div className="display-6 fw-bold">45</div>
                  <small>Minutes</small>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <Button variant="light" size="lg" className="fw-bold">
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;