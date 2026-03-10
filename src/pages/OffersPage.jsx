// OffersPage.jsx
import React from "react";

const OffersPage = () => {
  const offers = [
    { id: 1, title: "Bank Offer", discount: "10% Instant Discount", bank: "Canara Bank" },
    { id: 2, title: "Festive Sale", discount: "Up to 60% OFF" },
    // Add more offers
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4">🎁 Special Offers</h1>
      <div className="row">
        {offers.map(offer => (
          <div key={offer.id} className="col-md-4 mb-4">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">{offer.discount}</p>
                {offer.bank && <p>Bank: {offer.bank}</p>}
                <button className="btn btn-warning">Claim Offer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;