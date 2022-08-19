import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact p-5 m-auto">
        <div className="box-container d-flex justify-content-between align-items-center">
          <div className="box m-auto">
            <h3>Our Branches</h3>
            <a href="/#">Tariq Road</a>
            <a href="/#">Hyper Star</a>
            <a href="/#">Milinium Mall</a>
          </div>

          <div className="box m-auto">
            <h3>Contact Info</h3>
            <a href="/#">+923472086321</a>
            <a href="/#">fashion.collection@gmail.com</a>
            <a href="/#">Address: Main Branch tariq Road Karachi, Pakistan.</a>
          </div>

          <div className="box m-auto">
            <h3>Follow on</h3>
            <a id="follow" className="fab fa-facebook"></a>
            <a id="follow" className="fab fa-twitter"></a>
            <a id="follow" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
