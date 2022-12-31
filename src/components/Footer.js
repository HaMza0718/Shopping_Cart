import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Quick links</h3>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className="box">
            <h3>Follow on</h3>
            <a href="#" id="follow" className="fab fa-facebook"></a>
            <a href="#" id="follow" className="fab fa-twitter"></a>
            <a href="#" id="follow" className="fab fa-instagram"></a>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <a href="#">Mobile No: +923472086321</a>
            <a href="#">Email: fashionova@gmail.com</a>
            <a href="#">Address: Main Branch Tariq Road Karachi, Pakistan.</a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Footer;
