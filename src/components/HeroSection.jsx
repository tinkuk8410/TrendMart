// HeroSection.jsx - FIXED VERSION
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import './HeroSec.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const featuredItems = [
    { 
      id: 1, 
      title: "Mattresses", 
      price: "From ₹2,990", 
      brands: "Wakefit, Sleepwell & more",
      bgColor: "bg-light",
      path: "/mattresses",
      category: "home-furniture"
    },
    { 
      id: 2, 
      title: "Valentine's Sale", 
      subtitle: "Special Collection",
      bgColor: "bg-danger text-white",
      path: "/valentine-sale",
      category: "offers"
    },
    { 
      id: 3, 
      title: "Bank Offer", 
      subtitle: "10% Instant Discount*", 
      bank: "Canara Bank",
      bgColor: "bg-primary text-white",
      path: "/offers",
      category: "offers"
    },
  ];

  const deals = [
    {
      id: 1,
      title: "Smart Watches",
      price: "From ₹1,999",
      discount: "60% OFF",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=150&h=150&fit=crop",
      path: "/smart-watches",
      category: "electronics"
    },
    {
      id: 2,
      title: "Laptops",
      price: "From ₹24,999",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=150&h=150&fit=crop",
      path: "/laptops",
      category: "electronics"
    }
  ];

  const handleFeaturedItemClick = (item) => {
    console.log(`Navigating to ${item.title}...`);
    navigate(item.path);
  };

  const handleDealClick = (deal) => {
    console.log(`Navigating to ${deal.title}...`);
    navigate(deal.path);
  };

  const handleShopNowClick = () => {
    navigate("/valentine-collection");
    console.log("Shopping Valentine's collection...");
  };

  const handleClaimOfferClick = () => {
    navigate("/offers");
    console.log("Claiming special offer...");
  };

  return (
    <section className="hero-section">
      
      {/* Main Hero Content */}
      <div className="container-fluid bg-light py-4">
        <div className="container">
          <div className="row">

            {/* Featured Items - Left Column */}
            <div className="col-md-3 ">
              <div className="d-flex flex-column gap-3 mb-3">
                {featuredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`p-3 rounded shadow-sm ${item.bgColor} cursor-pointer`}
                    onClick={() => handleFeaturedItemClick(item)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleFeaturedItemClick(item)}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        {item.subtitle && (
                          <small className="d-block mb-1">{item.subtitle}</small>
                        )}
                        {item.price && (
                          <div className="fw-bold mb-1">{item.price}</div>
                        )}
                        {item.brands && (
                          <small className="text-muted">{item.brands}</small>
                        )}
                        {item.bank && (
                          <div className="d-flex align-items-center mt-2">
                            <span className="bg-white text-primary px-2 py-1 rounded small fw-bold">
                              {item.bank}
                            </span>
                          </div>
                        )}
                      </div>
                      {item.id === 2 && (
                        <div className="bg-white text-danger p-1 rounded">
                          ❤️
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image - Center Column */}
            <div className="col-md-6">
              <div className="position-relative rounded overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Valentine's Sale"
                  className="img-fluid w-100 cursor-pointer"
                  style={{ height: '400px', objectFit: 'cover' }}
                  onClick={handleShopNowClick}
                />
                <div className="position-absolute top-0 start-0 bg-danger text-white px-4 py-2">
                  <strong>VALENTINE'S SALE</strong>
                </div>
                <div className="position-absolute bottom-0 start-0 end-0 p-4 text-white" 
                     style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                  <h3 className="fw-bold">Special Valentine Collection</h3>
                  <p className="mb-3">Up to 60% OFF on selected items</p>
                  <button 
                    className="btn btn-warning btn-lg"
                    onClick={handleShopNowClick}
                  >
                    Shop Now <ArrowRight className="ms-2" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Offers - Right Column */}
            <div className="col-md-3">
              <div className="d-flex flex-column gap-3">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h6 className="fw-bold text-primary mb-3">Today's Best Deals</h6>
                  {deals.map((deal) => (
                    <div 
                      key={deal.id} 
                      className="d-flex gap-3 mb-3 cursor-pointer p-2 rounded"
                      onClick={() => handleDealClick(deal)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && handleDealClick(deal)}
                    >
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="rounded"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <div>
                        <div className="fw-bold">{deal.title}</div>
                        <div className="text-danger fw-bold">{deal.price}</div>
                        <small className="text-muted">{deal.discount}</small>
                      </div>
                    </div>
                  ))}
                </div>

                <div 
                  className="bg-primary text-white p-4 rounded shadow-sm cursor-pointer"
                  onClick={handleClaimOfferClick}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleClaimOfferClick()}
                >
                  <h6 className="fw-bold mb-3">Special Offer</h6>
                  <p className="small mb-3">Extra 10% off on first order</p>
                  <button 
                    className="btn btn-warning btn-sm w-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClaimOfferClick();
                    }}
                  >
                    Claim Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;