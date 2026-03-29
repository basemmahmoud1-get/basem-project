import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Home() {
  const { products, loading } = useContext(ProductContext);
  const featured = products.slice(0, 4);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <ClipLoader color="#0d6efd" size={60} />
      </div>
    );
  }

  return (
    <>
     <div className="bg-black text-white text-center py-5 mb-5">
        <div className="container">
          <h1 className="fw-bold">Basem_Store</h1>
          <p>Discover the latest phones and smart accessories.</p>
          <Link to="/products" className="btn btn-light mt-3">
            Start Shopping
          </Link>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-4 text-center">Top Picks For You</h2>

        <div className="row">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}


