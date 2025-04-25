import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  return (
    <div className="container ">
        <h1
  className="text-center"
  style={{ marginTop: '70px', marginLeft:"140px" }}
>Continue To Paying To Access <br/>The PDF Download</h1>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="row">
          {/* Left: Credit Card Form */}
          <div
            className="col-md-7 mt-5 p-4 rounded"
            style={{ backgroundColor: '#FFF9E3' }}
          >
            <h4><strong>Credit Card</strong></h4>
            <p className="text-muted">
              Save money transfer using your bank account. <br /> Visa, Mastero
            </p>
            <div className="form-group mb-3">
              <label className="mb-1">CREDIT CARD NUMBER</label>
              <input
                type="text"
                className="form-control"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="row mt-3">
              <div className="col-md-6 form-group mb-3">
                <label className="mb-1">CVV CODE</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="***"
                />
              </div>
              <div className="col-md-6 form-group mb-3">
                <label className="mb-1">EXPIRY DATE</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="mb-1">NAME ON CARD</label>
              <input
                type="text"
                className="form-control"
                placeholder="Cardholder Name"
              />
            </div>
          </div>

          {/* Right: Price Summary */}
          <div className="col-md-5 mt-4 p-4">
          <div
  className=" border p-4 rounded shadow-sm"
  style={{ width: '500px', backgroundColor:"#FFF9E3" }}
>
              <div
                className="d-flex justify-content-between mb-2"
                style={{ marginTop: '20px' }}
              >
                <span>Subtotal</span>
                <strong>₹550.00</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Discount</span>
                <strong className="text-danger">-₹50.00</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span><strong>TOTAL</strong></span>
                <strong>₹500.00</strong>
              </div>
              <button className="btn btn-success w-100">PROCEED TO PAY</button>
              <div
                className="text-center mt-3 text-muted"
                style={{ fontSize: '0.9rem' }}
              >
                <i className="bi bi-lock-fill me-1"></i>100% Secure Payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
