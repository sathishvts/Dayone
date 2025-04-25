import React from 'react'
import chilly from "../images/second col.png"
import Footer from "./Footer";


function Recipe() {
    return (
        <div>
            <div>
                <h1 style={{ marginTop: "50px", textAlign: "center", marginLeft: "20px" }}>LENTIL CHILI</h1>
            </div>

            <div style={{ width: "100%", marginLeft: "20px", marginTop: "160px" }}>
                <img className="w-100" src={chilly} alt="chilly" />
            </div>

            <div className="container mt-4 px-5">
                <h2 className="fw-bold">
                    Lentils, tomatoes, and ground meat <span className="fw-normal">
                        are a winning combination in the lentil chili. This recipe packs 9 grams of fiber per serving. Flavorful and filling.
                    </span>
                </h2>

                <h4 className="mt-4">Ingredients</h4>
                <ul className="mt-3 fw-semibold" style={{ fontSize: "2rem", lineHeight: "1.8" }}>
                    <li>1/2 pound ground meat (15% fat)</li>
                    <li>1 1/2 cups onion (chopped)</li>
                    <li>1 clove garlic (crushed)</li>
                    <li>2 cups lentils (cooked, drained)</li>
                    <li>2 cans tomatoes, low-sodium, diced or crushed (29 ounce or 2 cans 14 1/2 ounce)</li>
                    <li>1 tablespoon chili powder</li>
                    <li>cumin, ground (1/2 teaspoon, optional)</li>
                </ul>
            </div>

            <div className="container mt-4">
                <h4 className="fw-bold px-5" style={{ fontSize: "2rem", lineHeight: "1.8" }}>
                    Directions
                </h4>

                <ol className="mt-3 px-5 fw-semibold" style={{ fontSize: "2rem", lineHeight: "1.8" }}>
                    <li>Wash hands with soap and water.</li>
                    <li>
                        In a large saucepan, <strong>brown meat over medium-high heat</strong>, breaking it into bite-sized pieces. <strong>Drain fat.</strong>
                    </li>
                    <li>Add onion and garlic and cook until softened.</li>
                    <li>
                        Add lentils, tomatoes, chili powder, and cumin. Cook for about 1 hour until flavors are blended.
                    </li>
                    <li>Serve hot, topped with your favorite chili toppings.</li>
                </ol>
            </div>

            {/* Nutrients Section */}
            <div className="container mt-4" style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)', padding:"20px", marginLeft:"30px", fontSize:"30px", borderRadius:"20px" }}>




                <div className="row mb-2">
                    <div className="col-6"><strong>Nutrients</strong></div>
                    <p className="col-6 ">Amount</p>
                    <hr className="my-1" />
                </div>

                <div className="row mb-2 ps-3">
                    <div className="col-6">Saturated Fat</div>
                    <div className="col-6">3 g</div>
                    <hr className="my-1" />
                </div>

                <div className="row mb-2 ps-3">
                    <div className="col-6">Cholesterol</div>
                    <div className="col-6">60 mg</div>
                    <hr className="my-1" />
                </div>





                <div className="row mb-2 ps-3">
                    <div className="col-6">Sodium</div>
                    <div className="col-6">300 mg</div>
                    <hr className="my-1" />
                </div>


                <div className="row mb-2 ps-3">
                    <div className="col-6">Vitamin</div>
                    <div className="col-6">20 mg</div>
                    <hr className="my-1" />
                </div>


                <div className="row mb-2 ps-3">
                    <div className="col-6">Calcium</div>
                    <div className="col-6">40 mg</div>
                    <hr className="my-1" />
                </div> <div className="row mb-2 ps-3">

                    <div className="col-6">Iron</div>
                    <div className="col-6">75 mg</div>
                    <hr className="my-1" />
                </div>
                <div className="col-6 px-2" >N/A When Display Nutrient  data is unavailable</div>

            </div>
            <Footer />

        </div>
    )
}

export default Recipe