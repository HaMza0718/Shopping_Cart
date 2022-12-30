import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="fw-bold">Payment Detail</h2>
          </div>
          <div className="checkout col-6 row d-flex justify-content-center align-items-center m-auto p-3">
            <input type="text" placeholder="Name" className="box m-1"/>
            <input type="email" placeholder="E-mail" className="box m-1"/>
            <input type="number" placeholder="Contact-No" className="box m-1"/>
            <textarea className="box" placeholder="Full Address" cols="30" rows="10"/>
            <input type="submit" value="Order Now 📪" className="btn btn-outline-dark my-3 fw-bolder w-50 border-2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
