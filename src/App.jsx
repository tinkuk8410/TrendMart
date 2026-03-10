import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import MobilesPage from './pages/MobilesPage';
import FashionPage from './pages/FashionPage';
import ElectronicsPage from './pages/ElectronicsPage';
import OffersPage from './pages/OffersPage';

function App() {
  return (
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            
            {/* categories pages path  */}
            <Route path="/mobiles-tablets" element={<MobilesPage />} />
            <Route path="/fashion" element={<FashionPage />} />
            <Route path="/electronics" element={<ElectronicsPage />} />
            <Route path="/offers" element={<OffersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;