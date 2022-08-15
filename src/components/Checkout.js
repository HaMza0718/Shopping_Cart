import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 mb-4">
            <h3 className="fw-bolder text-center">Payment Detail</h3>
          </div>
          <div className="checkout col-6 row d-flex justify-content-center align-items-center m-auto p-3">
            <input type="text" placeholder="Name" className="box"/>
            <input type="email" placeholder="E-mail" className="box"/>
            <input type="number" placeholder="Contact-No" className="box"/>
            <textarea className="box" placeholder="Full Address" cols="30" rows="10"/>
            <input type="submit" value="Order Now 📪" className="btn btn-outline-dark m-3 fw-bolder w-50"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
