import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'cash',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Order Confirmed',
      text: 'Your order has been placed successfully.',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      clearCart();
      navigate('/');
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>No products selected</h2>
        <Link to="/products" className="btn btn-dark mt-3">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Complete Your Order</h2>

      <div className="row">
        <div className="col-md-7">
          <form onSubmit={placeOrder} className="shadow p-4 rounded">

            <input
              type="text"
              name="fullName"
              className="form-control mb-3"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              className="form-control mb-3"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              className="form-control mb-3"
              placeholder="Delivery Address"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              className="form-control mb-3"
              placeholder="City"
              onChange={handleChange}
            />

            <select
              name="paymentMethod"
              className="form-select mb-3"
              onChange={handleChange}
            >
              <option value="cash">Cash on Delivery</option>
              <option value="visa">Visa</option>
            </select>

            <button className="btn btn-dark w-100">Place Order</button>
          </form>
        </div>

        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              Order Details
            </div>

            <div className="card-body">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.title.substring(0, 20)} x{item.quantity}</span>
                  <span>{(item.price * item.quantity).toFixed(2)} EGP</span>
                </div>
              ))}

              <hr />
              <h5>Total: {getCartTotal().toFixed(2)} EGP</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}