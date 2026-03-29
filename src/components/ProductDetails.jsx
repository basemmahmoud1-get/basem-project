import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useContext(ProductContext);
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (products.length > 0) {
      const selected = products.find(p => p.id === Number(id));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItem(selected);
    }
  }, [products, id]);

  const addItemToCart = () => {
    if (!item) return;

    addToCart(item, count);

    Swal.fire({
      icon: 'success',
      title: 'Item Added',
      text: `${item.title} has been added (${count})`,
      confirmButtonColor: '#222',
      timer: 1800,
      showConfirmButton: false,
    });
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading product details...</h4>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="text-center mt-5">
        <h2>Oops! Product not available</h2>
        <Link to="/products" className="btn btn-dark mt-3">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.title} | Mobile Hub</title>
      </Helmet>

      <div className="container mt-4">

        <Link to="/products" className="btn btn-outline-dark mb-4">
          ← Continue Shopping
        </Link>

        <div className="row shadow p-4 rounded bg-light">

          <div className="col-md-5 text-center">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid"
              style={{ maxHeight: '350px', objectFit: 'contain' }}
            />
          </div>

          <div className="col-md-7">
            <h2 className="mb-2">{item.title}</h2>
            <p className="text-secondary">{item.category}</p>

            <p className="mt-3">{item.description}</p>

            <h3 className="text-dark mt-4">{item.price} EGP</h3>

            <div className="d-flex align-items-center gap-3 mt-4">

              <div className="input-group" style={{ width: '140px' }}>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setCount(c => Math.max(1, c - 1))}
                >
                  -
                </button>

                <input
                  type="number"
                  className="form-control text-center"
                  value={count}
                  onChange={(e) =>
                    setCount(Math.max(1, parseInt(e.target.value) || 1))
                  }
                />

                <button
                  className="btn btn-outline-dark"
                  onClick={() => setCount(c => c + 1)}
                >
                  +
                </button>
              </div>

              <button onClick={addItemToCart} className="btn btn-dark px-4">
                Add To Cart
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}