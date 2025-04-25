// import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import jerry from '../images/jerry.png';
import phone from '../images/mobile.png';
import google from '../images/google.png';
import app from '../images/app store.png';
import stand from '../images/stand phone.png';
import strawberry from '../images/strawberry.png';

import Footer from "./Footer";


function Eathealthy() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const handleDownload = () => {
    navigate('/card');
  };
  // const handleEvent = () => {
  //   navigate('receipe');
  // };
  return (
    <div className="w-100" style={{ marginTop: "100px" }}>
      <img src={jerry} alt="jerry" className="img-fluid" style={{ height: "800px", objectFit: "cover" }} />


      <div style={{
        backgroundColor: "#fffde7",
        width: "50%",
        height: "200px",
        position: "relative",
        marginTop: "-300px",
        padding: "20px",
        marginLeft: "40px"
      }}>
        <h1>Are you making every bite count?</h1>
        <p className="text-center">Take the EAT HEALTH + to find out!</p>
        <div className="text-center">
          <button className="btn btn-success" style={{ width: "180px" }} onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      </div>



      <h1 className="text-center " style={{ marginTop: "180px" }} >Eat Healthy + Provide You Curated Detail About The Following</h1>

      <div className="text-center mt-5 mx-auto" style={{ width: "70%" }}>
        <h6>
          Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem neque nemo quia doloribus...
        </h6>
      </div>

    

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={phone} alt="phone" className="img-fluid" />
          </div>
          <div className="col-md-6 mt-5">
            <h1>Set Personal Goals For Eat Healthy</h1>
            <h6 className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </h6>
            <div className="mt-3">
              <img src={google} alt="google" className="me-3" />
              <img src={app} alt="app" />
            </div>
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <h1>Find easy low cost recipe</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, porro...</p>

{/* <Link to="./receipe"> */}


<Link to="/receipe">
      <button
        className="bg-success text-white rounded-2 mt-3"
        style={{ padding: '10px 20px' }}
      >
        VIEW WEEKLY RECIPE
      </button>


            </Link>


          </div>
          <div className="col-md-6 text-center">
            <img src={stand} alt="stand" className="img-fluid mt-4" />
          </div>
        </div>

        <div className="position-relative mt-5">
          <img src={strawberry} alt="pines" className="img-fluid" />
          <div style={{ position: 'absolute', top: '30%', left: '50px' }} >
            <h3 className="fw-bold">JOIN THE 30-DAY CHALLENGE</h3>
            <p>
              Our 30-Day Challenge is a fun and effective way... to kick-start your journey towards better health...
            </p>

            <button
              className="bg-success mt-3 text-white rounded-3 p-2 px-4"
              onClick={handleDownload}
            >
              DOWNLOAD THE CHALLENGE PDF
            </button>

          </div>
        </div>

        
      </div>

     

            <Footer />
      
    </div>
  );
}

export default Eathealthy;
