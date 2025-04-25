import React from 'react';

import social from '../images/social logo.png'

function Footer() {
  return (
    <div>
      <footer className="bg-light text-dark py-5">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <h5 className="fw-bold">EAT HEALTHY +</h5>
              <p>
                Eat Healthy + is a comprehensive platform, which gives an essential guide to healthy eating
              </p>
              <p className="mb-1 fw-semibold">Terms & conditions</p>
              <p className="fw-semibold">Privacy policy</p>
            </div>

            <div className="col-md-4">
              <h6 className="fw-bold">Quick Links:</h6>
              <p className="mb-1">About us</p>
              <p className="mb-1">Advertising Policy</p>

              <h6 className="fw-bold mt-3">Contact us:</h6>
              <p className="mb-1">Phone: +91 123457890</p>
              <p>Email: info@eathealthy.com</p>
            </div>

            <div className="col-md-4">
              <h6 className="fw-bold">Nutrition Guidelines</h6>
              <p className="mb-1">News</p>
              <p className="mb-3">Diversity & Inclusion</p>

              <div className="d-flex gap-3">
               
                <img src={social} alt="Social Icon" />
              </div>
            </div>

          </div>

          <div className="text-start pt-2 mt-4 border-top">
            <p className="mb-0">
              &copy; Eat Healthy +. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
