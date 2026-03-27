import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  CreditCard, 
  Truck, 
  Shield, 
  Headphones,
  Mail,
  MapPin,
  Phone 
} from 'lucide-react';

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Quick links data with unique keys
  const shopLinks = [
    { id: 'shop-1', path: '/category/electronics', label: 'Electronics' },
    { id: 'shop-2', path: '/category/fashion', label: 'Fashion' },
    { id: 'shop-3', path: '/category/home', label: 'Home & Garden' },
    { id: 'shop-4', path: '/category/beauty', label: 'Beauty' },
    { id: 'shop-5', path: '/category/sports', label: 'Sports' }
  ];

  const supportLinks = [
    { id: 'support-1', path: '/contact', label: 'Contact Us' },
    { id: 'support-2', path: '/faq', label: 'FAQ' },
    { id: 'support-3', path: '/shipping', label: 'Shipping Info' },
    { id: 'support-4', path: '/returns', label: 'Returns' },
    { id: 'support-5', path: '/track-order', label: 'Track Order' }
  ];

  const companyLinks = [
    { id: 'company-1', path: '/about', label: 'About Us' },
    { id: 'company-2', path: '/careers', label: 'Careers' },
    { id: 'company-3', path: '/blog', label: 'Blog' },
    { id: 'company-4', path: '/stores', label: 'Our Stores' },
    { id: 'company-5', path: '/affiliate', label: 'Affiliate Program' }
  ];

  const legalLinks = [
    { id: 'legal-1', path: '/privacy', label: 'Privacy Policy' },
    { id: 'legal-2', path: '/terms', label: 'Terms of Service' },
    { id: 'legal-3', path: '/cookies', label: 'Cookie Policy' },
    { id: 'legal-4', path: '/accessibility', label: 'Accessibility' },
    { id: 'legal-5', path: '/sitemap', label: 'Sitemap' }
  ];

  const trustBadges = [
    { id: 'badge-1', icon: Truck, title: 'Free Shipping', desc: 'On orders over 500₹' },
    { id: 'badge-2', icon: CreditCard, title: 'Secure Payment', desc: '100% secure' },
    { id: 'badge-3', icon: Shield, title: 'Quality Products', desc: '100% authentic' },
    { id: 'badge-4', icon: Headphones, title: '24/7 Support', desc: 'Dedicated help' }
  ];

  const socialLinks = [
    { id: 'social-fb', icon: Facebook, href: '#', label: 'Facebook' },
    { id: 'social-tw', icon: Twitter, href: '#', label: 'Twitter' },
    { id: 'social-ig', icon: Instagram, href: '#', label: 'Instagram' },
    { id: 'social-yt', icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      {/* Trust Badges Section */}
      <div className="container mb-5">
        <div className="row g-4">
          {trustBadges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <div key={badge.id} className="col-md-3 col-sm-6">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <IconComponent size={28} className="text-primary" />
                  </div>
                  <h6 className="fw-bold mb-1">{badge.title}</h6>
                  <small className="text-white-50">{badge.desc}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container">
        {/* Brand & Newsletter Row */}
        <div className="row gy-4 gy-lg-0 mb-5 pb-3 border-bottom border-secondary">
          <div className="col-lg-4">
            <div className="pe-lg-4">
              
              <h3 className="fw-bold mb-3">TRENDMART</h3>
              <p className="text-white-50 mb-4">
                Your premier destination for quality products and exceptional shopping experience.
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={social.id}
                      href={social.href} 
                      className="text-white-50 hover-white"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="px-lg-4 border-start border-end border-secondary h-100 d-flex flex-column justify-content-center">
              <h5 className="fw-bold mb-3">Stay Updated</h5>
              <p className="text-white-50 small mb-3">Subscribe to get special offers and updates</p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control bg-transparent text-white border-white rounded-0" 
                    placeholder="Your email address"
                    aria-label="Email"
                  />
                  <button className="btn btn-primary rounded-0" type="button">
                    <Mail size={18} className="me-1" />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="ps-lg-4">
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <MapPin size={18} className="text-primary me-3" />
                  <span className="text-white-50">Nagpur, India, 440003</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Phone size={18} className="text-primary me-3" />
                  <span className="text-white-50">+91 8805483022</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Mail size={18} className="text-primary me-3" />
                  <span className="text-white-50">support@trendmart.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="row gy-4 mb-4">
          {/* Shop Links */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3 text-uppercase small">Shop</h6>
            <ul className="list-unstyled">
              {shopLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link to={link.path} className="text-white-50 text-decoration-none hover-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3 text-uppercase small">Support</h6>
            <ul className="list-unstyled">
              {supportLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link to={link.path} className="text-white-50 text-decoration-none hover-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3 text-uppercase small">Company</h6>
            <ul className="list-unstyled">
              {companyLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link to={link.path} className="text-white-50 text-decoration-none hover-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3 text-uppercase small">Legal</h6>
            <ul className="list-unstyled">
              {legalLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link to={link.path} className="text-white-50 text-decoration-none hover-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-3">
              <small className="text-white-50 me-2">We Accept:</small>
              <span className="text-white-50">💳</span>
              <span className="text-white-50">🏦</span>
              <span className="text-white-50">📱</span>
              <span className="text-white-50">💵</span>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="text-white-50">
              © {currentYear} TRENDMART.COM. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;