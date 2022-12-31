import React from "react";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="hero">
      <div className="bg-dark text-white border-0">
        <img
          src="/images/bg.jpg"
          className="card-img"
          height="600px"
          width="auto"
          alt="Background"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 fw-bold">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
