import React from "react";

import { Link } from "react-router-dom";

import home from "../images/home screen.png"
import garden from "../images/first col.png"
import prawn from "../images/second col.png"
import cs from "../images/cs.jpg"
import pine from "../images/strawberry.png"

import men from "../images/boy.png"
import man from "../images/girl.png"
import mens from "../images/boy1.png"
import herbal from "../images/herbal .png"
import fitbit from "../images/fitbit .png"
import healthchew from "../images/healthy chew .png"

import nutreco from "../images/nutreco .png"
import nutrigrowth from "../images/nutri growth .png"
import atrium from "../images/atrium .png"
import careplus from "../images/care plus .png"
import social from "../images/social logo.png"

import Footer from "./Footer";


function Home() {


    return (



        <div class="overflow-hidden">

            <div class="pt-5 mt-5">

                <div style={{ margin: 0, padding: 0 }}>
                    <img
                        src={home}
                        alt="pic"
                        style={{
                            width: '95vw',


                            filter: 'blur(4px)'
                        }}
                    />

                </div>

                <div
                    className="mt-3 position-relative blur-bg"
                    style={{

                        width: '90%',
                        backgroundColor: 'rgba(145, 140, 137, 0.4)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '30px',
                        left: '50px',
                        position: 'relative',
                        top: '-200px',


                    }}
                >
                    <div
                        className="mt-3"
                        style={{



                        }}
                    >


                        <h1 className="text-success text-center">EAT HEALTHY +</h1>
                        <h2 className=" mt-3 text-black text-center">Your Essential Guide To Healthy Eating</h2>
                        <p className="text-center  mt-3">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quod reiciendis placeat assumenda provident impedit dicta doloremque rerum <br /> sapiente, nemo, officia perferendis omnis aliquam iste itaque id corporis!</p>

                        <Link to='./aboutus'>
                            <div className="text-center mt-5">
                                <button className="mt-2.5 border-black rounded-3">MORE ABOUT US</button>
                            </div>
                        </Link>



                        <div class="container px-3 mt-5">
                            <div class="row text-center justify-content-center">
                                <div class="col-6 col-sm-4 col-md-2 mb-4">
                                    <div class="fs-2">🍲</div>
                                    <p class="mb-0">Perfect Meal Plan</p>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 mb-4">
                                    <div class="fs-2">⚖️</div>
                                    <p class="mb-0">Nutrition Plan</p>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 mb-4">
                                    <div class="fs-2">📄</div>
                                    <p class="mb-0">Free Sample Brochures</p>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 mb-4">
                                    <div class="fs-2">🥕🍎</div>
                                    <p class="mb-0">Personalized Diet Chart</p>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 mb-4">
                                    <div class="fs-2">🗓️</div>
                                    <p class="mb-0">30-days Challenge</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="row text-center">
                    <h1 className="fw-bold text-center mb-5">OUR FEED FOR YOU </h1>

                    <div className="container mt-3  ">
                        <div className="row text-center ">

                            <div className="col-md-6">
                                <img
                                    src={garden}
                                    alt="gardens"
                                    style={{
                                        width: '100%',
                                        borderRadius: '20px',
                                        marginLeft: '80px',
                                        // height: '100%',
                                        objectFit: 'cover' // Ensures the image covers the full height without distorting
                                    }}
                                />
                                <p
                                    className="bg-danger  text-white"
                                    style={{
                                        // backgroundColor: '#c4c9ff', // Light lavender color
                                        position: 'relative',
                                        top: '-80px',
                                        width: '390px',
                                        left: '290px',
                                        borderRadius: '5px',
                                        padding: '10px'


                                    }}
                                >
                                    Nutrition Inforamtion For Families
                                </p>
                            </div>


                            <div className="col-md-6 px-">
                                <div className="mb-3">
                                    <img
                                        src={prawn}
                                        alt="prawns"

                                        style={{ width: '80%', height: '450px', borderRadius: '20px' }}
                                    />
                                    <p
                                        className="bg-danger  text-white"
                                        style={{
                                            // backgroundColor: '#c4c9ff', // Light lavender color
                                            position: 'relative',
                                            top: '-40px',
                                            width: '240px',
                                            left: '210px',
                                            padding: '5px',

                                            borderRadius: '5px'


                                        }}
                                    >
                                        Receipe of the week
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src={cs}
                                        alt="css"
                                        style={{ width: '80%', height: '420px', borderRadius: '20px' }}
                                    />
                                    <p
                                        className="bg-danger text-white"
                                        style={{
                                            // backgroundColor: '#c4c9ff', // Light lavender color
                                            position: 'relative',
                                            top: '-40px',
                                            width: '250px',
                                            left: '210px',
                                            padding: '5px',

                                            borderRadius: '5px'


                                        }}
                                    >
                                        Get Your MEAL PLAN PDF
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container text-center my-5">
                    <h2 class="mb-4">FEATURED IN</h2>

                    <div class="row justify-content-center mt-5">
                        <div class="col-6 col-md-3 ">
                            <img src={herbal} alt="herbals"></img>

                        </div>
                        <div class="col-6 col-md-3  ">
                            <img src={fitbit} alt="fitbit"></img>
                        </div>
                        <div class="col-6 col-md-3   ">
                            <img src={healthchew} alt="healthchew "></img>

                        </div>
                        <div class="col-6 col-md-3  ">
                            <img src={nutreco} alt="nut"></img>

                        </div>
                        <div class="col-6 col-md-3  ">
                            <img src={nutrigrowth} alt="nutrigrowth"></img>

                        </div>
                        <div class="col-6 col-md-3 text-success fw-bold">
                            <img src={atrium} alt="atri"></img>

                        </div>
                        <div class="col-6 col-md-3 text-danger fw-bold">
                            {/* <p>CarePlus Health Plans Inc.</p> */}
                            <img src={careplus} alt="careplus"></img>

                        </div>
                    </div>
                </div>




                <div class="container challenge-section  ">
                    <img src={pine} alt="pines "></img>



                    <div
                        className="mt-3"
                        style={{


                            position: 'relative',
                            top: '-400px',
                            left: '60px'


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


                <div class="container my-5">
                    <h3 class="text-center fw-bold mb-3">TESTIMONIALS</h3>
                    <p class="text-center text-muted mb-5">Hear from our valuable customers who have transformed their health with <strong>EAT HEALTHY</strong> +</p>



                    <div
                        className="mt-3 row text-center  p-5"
                        style={{
                            backgroundColor: '#ffffe0'


                        }}
                    >


                        <div class="col-md-4 mb-4">

                            <img src={men} alt="mens"></img>
                            <p class="mt-3">"I've learned so much about nutrition from this website! It has changed my perspective on eating and helped me make healthier choices."</p>
                        </div>


                        <div class='col-md-4 mb-4'>
                            <img src={man} alt='man'></img>

                            <p class="mt-3">"I've learned so much about nutrition from this website! It has changed my perspective on eating and helped me make healthier choices."</p>
                        </div>


                        <div class="col-md-4 mb-4">
                            <img src={mens} alt="mens"></img>
                            <p class="mt-3">"Before, I was lost in the world of food, feeling confused and overwhelmed. After using this website, I feel empowered & motivated."</p>
                        </div>
                    </div>
                </div>



            </div>

            <Footer />


        </div>

    );
}

export default Home;
