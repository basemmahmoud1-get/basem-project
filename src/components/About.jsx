import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">About Basem_Store</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-4 h-100">
            <h4>📍 Our Location</h4>
            <p>Egypt - Giza</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center p-4 h-100">
            <h4>📧 Email Us</h4>
            <p>Basem_Store@gmail.com</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center p-4 h-100">
            <h4>📞 Call Support</h4>
            <p>+20 100 123 4567</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mt-5 p-4 text-center">
        <h3>💡 Who We Are</h3>
        <p>
          Basem_Store is an e-commerce platform specialized in smartphones,
          smart accessories, tablets, and wearable devices.
          Our goal is to provide the latest technology products with the best prices.
        </p>
      </div>
    </div>
  );
}

