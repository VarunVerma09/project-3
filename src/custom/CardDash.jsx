import React from 'react';

const CardDash = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
                    <div className="col-md-5">
            <div className="d-flex flex-column">
              <img
                src=""
                className="img-fluid border rounded mb-3"
                alt="Product"
              />

              <div className="d-flex gap-2">
                <img src="" className="img-thumbnail" width="60" alt="" />
                <img src="" className="img-thumbnail" width="60" alt="" />
                <img src="" className="img-thumbnail" width="60" alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold">
              Tata Coffee Gold Instant Coffee (50 g, Pure Flavoured)
            </h3>

            <p>
              <span className="badge bg-success">4.3 ★</span>
              <small className="text-muted"> 4,721 Ratings & 331 Reviews</small>
            </p>

            <h2 className="text-danger">
              ₹280
              <small className="text-muted text-decoration-line-through">
                ₹350
              </small>
              <span className="text-success"> 20% off</span>
            </h2>
            <p className="text-muted">₹560/100g</p>

            <h6>Available offers</h6>
            <ul className="text-success">
              <li>Combo Offer: Buy 2 items save ₹20</li>
              <li>Bank Offer: 5% cashback on Axis Bank Credit Card</li>
              <li>Bank Offer: 5% cashback on SBI Credit Card</li>
            </ul>

            <div className="my-3">
              <label className="fw-bold">Delivery</label>
              <br />
              <input
                type="text"
                className="form-control w-50 d-inline"
                placeholder="Enter Pincode"
              />
              <button className="btn btn-outline-primary">Check</button>
              <small className="text-danger d-block mt-1">
                Currently out of stock in this area
              </small>
            </div>

            <div className="my-3">
              <label className="fw-bold">Quantity</label>
              <br />
              <button className="btn btn-outline-secondary">50 g</button>
              <button className="btn btn-outline-secondary">90 g</button>
            </div>

            <div className="d-flex gap-3">
              <button className="btn btn-lg btn-outline-secondary">
                🛒 Add to Cart
              </button>
              <button className="btn btn-lg btn-warning text-white">
                ⚡ Buy Now
              </button>
            </div>

            <div className="mt-4">
              <h6>Highlights</h6>
              <p>Container Type: Glass Bottle</p>
              <p>
                <b>Important Note:</b> Image/color/design may vary
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDash;
