import React, { useState } from "react";

const Contact = () => {
  const [isOrder, setIsOrder] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="fw-bold">Payment Detail</h2>
          </div>
          <div className="checkout col-6 row d-flex justify-content-center align-items-center m-auto p-3">
            <input type="text" placeholder="Name" className="box m-1" required/>
            <input type="email" placeholder="E-mail" className="box m-1" required/>
            <input type="number" placeholder="Contact-No" className="box m-1" required/>
            <textarea
              className="box"
              placeholder="Full Address"
              cols="30"
              rows="10"
              required
            />
            <input
              type="submit"
              value="Order Now 📪"
              className="btn btn-outline-dark my-3 fw-bolder w-50 border-2"
              onClick={() => setIsOrder(true)}
            />
          </div>
        </div>
      </div>

      {isOrder && (
        <div
          className="bg-light p-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 5000,
            width: "20rem",
          }}
        >
          <div className="">
            Your Order Is Placed..! <br />
            Thank You For The Shopping..😊
          </div>
          <a href="/">
          <input
            type="submit"
            value="Close"
            className="btn-dark py-1 px-2 m-1"
            onClick={() => setIsOrder(false)}
            />
            </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
