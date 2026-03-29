import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Your shopping bag is empty</h2>
        <p>Add some amazing devices to continue.</p>
        <Link to="/products" className="btn btn-dark">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Cart</h2>

      {/* Desktop Table */}
      <div className="d-none d-md-block">
        <div className="table-responsive shadow-sm rounded">
          <table className="table align-middle">
            <thead className="table-dark">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                      />
                      <span>{item.title.substring(0, 35)}</span>
                    </div>
                  </td>

                  <td>{item.price} EGP</td>

                  <td style={{ width: '140px' }}>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>

                      <input
                        type="number"
                        className="form-control text-center"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                      />

                      <button
                        className="btn btn-outline-dark"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>{(item.price * item.quantity).toFixed(2)} EGP</td>

                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="d-block d-md-none">
        {cartItems.map((item) => (
          <div key={item.id} className="card mb-3 shadow-sm p-3">
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />

              <div className="flex-grow-1">
                <h6>{item.title}</h6>
                <p className="mb-1">{item.price} EGP</p>
                <p className="mb-2">
                  Total: {(item.price * item.quantity).toFixed(2)} EGP
                </p>

                <div className="d-flex gap-2 mb-2">
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>

                  <span className="px-2 pt-1">{item.quantity}</span>

                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-sm btn-outline-danger w-100"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 gap-3">
        <h4>Total: {getCartTotal().toFixed(2)} EGP</h4>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-warning" onClick={clearCart}>
            Clear All
          </button>

          <Link to="/checkout" className="btn btn-dark">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}