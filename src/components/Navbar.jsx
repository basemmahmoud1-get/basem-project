import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getCartCount } = useCart();
  const count = getCartCount();
  
  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark sticky-top shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-4" to="/">
          Basem_Store
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navBar">

          <ul className="navbar-nav mx-auto me-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Support</NavLink>
            </li>
          </ul>

          <Link to="/cart" className="btn btn-outline-light position-relative">
            🛒
            {count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
                {count}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}