import React from 'react';

import patato from '../images/patato.png';
import burger from '../images/burger.png';
import tanik from '../images/tanik.png';
import run from '../images/run boy.png';
import burgerkuchi from '../images/burger kuchi.png';
import payee from '../images/payee.png';
import herbal from "../images/herbal .png";
import fitbit from "../images/fitbit .png";
import healthchew from "../images/healthy chew .png";
import nutreco from "../images/nutreco .png";
import nutrigrowth from "../images/nutri growth .png";
import atrium from "../images/atrium .png";
import careplus from "../images/care plus .png";
import Footer from "./Footer";



function Resource() {
  return (
    <div>
      <h1 style={{ marginTop: "140px", textAlign: "center" }}>BLOG</h1>

      <div className="container" style={{ marginTop: "50px", marginLeft:"50px"}}>
        <div className="row">
          <div className="col">
            <img src={patato} alt="patato" />
            <h6>March 11 2025</h6>
            <h3>POTATOES: What About Diabetes,<br />Blood Pressure, Blood Sugar<br />and more?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quas vitae quos voluptas at dicta porro iusto impedit cum voluptate!</p>
          </div>
          <div className="col">
            <img src={burger} alt="burger" />
            <h6>March 11 2025</h6>
            <h3>BURGER: What About Diabetes,<br />Blood Pressure, Blood Sugar<br />and more?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quas vitae quos voluptas at dicta porro iusto impedit cum voluptate!</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <img src={tanik} alt="tanik" />
            <h6>March 11 2025</h6>
            <h3>Nutrition and Tanik:<br />Blood Pressure, Blood Sugar<br />and more?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quas vitae quos voluptas at dicta porro iusto impedit cum voluptate!</p>
          </div>
          <div className="col">
            <img src={run} alt="run" />
            <h6>March 11 2025</h6>
            <h3>Running: What About Health,<br />Blood Pressure, Blood Sugar<br />and more?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quas vitae quos voluptas at dicta porro iusto impedit cum voluptate!</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <img src={burgerkuchi} alt="burgerkuchi" />
            <h6>March 11 2025</h6>
            <h3>Junk Food: What About Diabetes,<br />Blood Pressure, Blood Sugar<br />and more?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quas vitae quos voluptas at dicta porro iusto impedit cum voluptate!</p>
          </div>
          <div className="col">
            <img src={payee} alt="payee" />
            <h6>March 11 2025</h6>
            <h3>Payee Tips: What About Diabetes,<br />Blood Pressure, Blood Sugar<br />and more?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quas vitae quos voluptas at dicta porro iusto impedit cum voluptate!</p>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <h2 className="mb-5">FEATURED IN</h2>
        <div className="row justify-content-center g-4">
          {[herbal, fitbit, healthchew, nutreco, nutrigrowth, atrium, careplus].map((imgSrc, index) => (
            <div className="col-6 col-md-3" key={index}>
              <img src={imgSrc} alt={`feature-${index}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Resource;
