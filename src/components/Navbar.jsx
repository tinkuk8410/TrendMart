import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, CircleUserRound } from "lucide-react";

const CustomNavbar = () => {
  const [cartItems] = useState(5);
  const [wishlistItems] = useState(7);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-dark text-white py-2">
        {/* Same as before */}
      </div>

      {/* Main Navbar */}
      <nav className="navbar bg-white shadow-sm sticky-top py-3">
        <div className="container">
          {/* First Row - Logo and Icons */}
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* LOGO */}
            <Link to="/" className="navbar-brand fw-bold fs-3 text-primary d-flex align-items-center">
              <img src="/images/logos/logo.png" alt="Logo" width="40" height="auto" className="me-2" />
              <span className="d-none d-sm-inline">TrendMart</span>
            </Link>

            {/* Desktop Search - Visible only on desktop */}
            <div className="position-relative d-none d-md-block mx-4" style={{ width: "60%" }}>
              <input
                type="text"
                className="form-control ps-3 pe-5 py-2"
                placeholder="Search for products, brands and more"
                style={{
                  borderRadius: '15px',
                  border: '1px solid #dee2e6',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              />
              <span className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                <button className="btn btn-link text-dark p-0">
                  <Search size={18} />
                </button>
              </span>
            </div>

            {/* Icons */}
            <div className="d-flex align-items-center gap-4">
              <Link to="/wishlist" className="text-dark position-relative">
                <Heart size={22} />
                {wishlistItems > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {wishlistItems}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="text-dark position-relative">
                <ShoppingCart size={22} />
                {cartItems > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {cartItems}
                  </span>
                )}
              </Link>

              <div className="dropdown">
                <span
                  className="text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <CircleUserRound size={25} />
                </span>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li><Link className="dropdown-item" to="/login">Login/Sign in</Link></li>
                  <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row - Mobile Search Bar (Visible only on mobile) */}
          <div className="d-md-none w-100 mt-3">
            <div className="position-relative">
              <input
                type="text"
                className="form-control ps-3 pe-5 py-2"
                placeholder="Search for products..."
                style={{
                  borderRadius: '15px',
                  border: '1px solid #dee2e6',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              />
              <span className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                <button className="btn btn-link text-dark p-0">
                  <Search size={18} />
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;