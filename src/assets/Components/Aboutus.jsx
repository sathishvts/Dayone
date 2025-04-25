import React from 'react';
import Footer from "./Footer";

import pine from "../images/strawberry.png"

import { Link } from 'react-router-dom'; // Ensure this is imported for the Link component to work

function Aboutus() {
  return (
    <div style={{ marginTop: '30px', marginLeft: '50px', fontSize: '30px' }}>
      <h1>Aboutus</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima a nostrum fuga. Accusamus consectetur consequuntur molestias eveniet tempora nam iure corrupti iste cupiditate harum iusto placeat nesciunt repellat repudiandae impedit commodi illum, nemo odio ipsam molestiae nulla suscipit odit est. Quae animi aspernatur perspiciatis facilis non aliquam ex assumenda quis?
        <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam ipsa architecto adipisci deleniti ullam quod quidem voluptates dignissimos omnis cumque facilis ducimus expedita laborum excepturi repudiandae officia, perferendis placeat
        <br /> consectetur consequuntur molestias eveniet tempora nam iure corrupti iste cupiditate harum iusto placeat nesciunt repellat repudiandae impedit commodi illum, nemo odio ipsam molestiae nulla suscipit odit est. Quae animi aspernatur perspiciatis facilis non aliquam ex assumenda quis?
        <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam ipsa architecto adipisci deleniti ullam quod quidem voluptates dignissimos omnis cumque facilis ducimus expedita laborum excepturi repudiandae officia, perferendis placeat
        <br />.
      </p>


        <div class="container challenge-section  ">
                          <img src={pine} alt="pines "></img>
      
      
      
                          <div
                              className="mt-3"
                              style={{
      
      
                                  position: 'relative',
                                  top: '-400px',
                                  left: '25px'
      
      
                              }}
                          >
                              <div class="col-md-6">
                                  <div class="challenge-content">
                                      <h3 class="fw-bold ">JOIN THE 30-DAY CHALLENGE</h3>
                                      <p>
                                          Our 30-Day Challenge is a fun and effective way to kick-start your journey towards better health.
                                          This program is designed to help you build lasting habits and see noticeable improvements in just one month!
                                      </p>
      
                                      <Link to="/card">
                                          <button className="bg-success mt-3 text-white rounded-3 p-2 px-4">
                                              DOWNLOAD THE CHALLENGE PDF
                                          </button>
                                      </Link>
      
      
                                  </div>
                              </div>
      
      
                          </div>
                      </div>

            <Footer />

    </div>
  );
}

export default Aboutus;
