import React from 'react';
import axios from 'axios';

const Donate = () => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const dispalyRazorpay = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND}/createPayment`)
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "VMSSH",
        description: "Test Transaction",
        image: `${process.env.REACT_APP_BACKEND}/logo`,
        order_id: data.id,
        handler: async (response) => {
          try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND}/verifyPayment`, response);
            console.log(data);
          } catch (error) {

          }
        }
      }
      const razorpayCard = new window.Razorpay(options);
      razorpayCard.open();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={dispalyRazorpay} className="btn shadow primary-btn px-4 fw-bold rounded-pill" >Donate Now</button>
      </header>
    </div>
  );
}
export default Donate