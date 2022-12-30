import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="section-title ">
          <h2 className="fw-bold">About Us</h2>
        </div>
        </div>
      </div>
      <div className="about mx-5 p-3">
        <div className="container">
          <div className="row">
            <div className="content">
              <h3>Why Choose us?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cumque sit nemo pariatur corporis perspiciatis aspernatur a
                ullam repudiandae autem asperiores quibusdam omnis commodi alias
                repellat illum, unde optio temporibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                soluta!
              </p>
              <a href="/#" className="btn btn-outline-dark me-3">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="container icontainer d-flex p-4">
          <div className="icons d-flex align-items-center p-3">
            <div className="info">
              <h3>Free Delivery 💌</h3>
              <span>On all Orders</span>
            </div>
          </div>
          <div className="icons d-flex align-items-center p-3">
            <div className="info">
              <h3>Secure Payment 🛑</h3>
              <span>Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
