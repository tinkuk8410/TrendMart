// Categories.jsx - UPDATED VERSION
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import './Categories.css';

const Categories = () => {
  
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    
    { id: 1, name: "Fashion", icon: "👗", path: "/fashion" },
    { id: 2, name: "Mobiles", icon: "📱", path: "/mobiles" },
    { id: 3, name: "Beauty", icon: "💄", path: "/beauty" },
    { id: 4, name: "Electronics", icon: "🔌", path: "/electronics" },
    { id: 5, name: "Home", icon: "🏠", path: "/home" },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    console.log(`Navigating to ${category.name} page...`);
    navigate(category.path);
  };

  const handleViewAllClick = () => {
    navigate("/all-categories");
    console.log("Viewing all categories...");
  };

  return (
    <div className="container-fluid bg-white py-2 border-bottom">
      <div className="container">
        {/* Mobile Categories - Horizontal Scroll */}
        <div className="d-md-none">
          <div className="categories-scroll">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className={`category-item-mobile ${activeCategory === category.id ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick(category)}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleCategoryClick(category)}
              >
                <div className="category-icon-mobile">
                  {category.icon}
                </div>
                <div className="category-name-mobile">
                  {category.name}
                </div>
              </div>
            ))}
            <div 
              className="category-item-mobile"
              onClick={handleViewAllClick}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleViewAllClick()}
            >
              <div className="category-icon-mobile">
                <ArrowRight size={20} className="text-primary" />
              </div>
              <div className="category-name-mobile text-primary">
                All
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Categories - Grid Layout */}
        
        <div className="row g-4 d-none d-md-flex">
            {categories.map((category) => (
              <div key={category.id} className="col">
                <div 
                  className={`text-center category-item cursor-pointer ${activeCategory === category.id ? 'active-category' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleCategoryClick(category)}
                >
                  <div className="category-icon mb-2" style={{ fontSize: '24px' }}>
                    {category.icon}
                  </div>
                  <div className="category-name fw-medium text-dark">
                    {category.name}
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Categories;