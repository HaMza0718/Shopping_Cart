import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact sec-padding" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 className="fw-bold">Contact Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-img" data-aos="flip-right">
              <div className="img-box">
                <h3 className="font">Contact Now</h3>
                <img src="/images/contact.jpg" alt="contact" />
              </div>
            </div>
            <div className="contact-text" data-aos="flip-left">
              <div className="contact-form">
                <h3>Welcome To Fashio|\|ova🧥</h3>
                <form action="">
                  <input type="text" className="name" placeholder="Name" />
                  <input type="email" className="email" placeholder="E-mail" />
                  <input
                    type="number"
                    className="Contact-no"
                    placeholder="Contact No"
                  />
                  <input type="text" id="message" placeholder="Your Message" />
                </form>
                <button className="btn btn-outline-dark m-2 fw-bolder w-50">
                  Send Message📩
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
