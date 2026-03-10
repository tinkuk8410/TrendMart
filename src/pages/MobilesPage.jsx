// MobilesPage.jsx
import React from "react";

const MobilesPage = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">📱 Mobiles & Tablets</h1>
      <div className="row">
        {/* Display mobile products here */}
        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd" className="card-img-top" alt="Mobile" />
            <div className="card-body">
              <h5 className="card-title">Smartphone XYZ</h5>
              <p className="card-text">₹15,999</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* Add more products */}
      </div>
    </div>
  );
};

export default MobilesPage;