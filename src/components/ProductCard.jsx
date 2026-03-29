import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">

        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: '220px', objectFit: 'contain' }}
        />

        <div className="card-body d-flex flex-column">

          <h6 className="text-muted">{product.category}</h6>

          <Link to={`/product/${product.id}`} className="text-dark text-decoration-none">
            <h5>{product.title}</h5>
          </Link>

          <p className="text-secondary small flex-grow-1">
            {product.description.substring(0, 60)}...
          </p>

          <h5 className="mt-2">{product.price} EGP</h5>

          <div className="d-flex gap-2 mt-3">
            <button
              onClick={() => addToCart(product)}
              className="btn btn-dark w-100"
            >
              Add
            </button>

            <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
              Details
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}