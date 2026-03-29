import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ProductList() {
  const {
    products,
    categories,
    loading,
    getAllProducts,
    getProductsByCategory,
  } = useContext(ProductContext);

  const [search, setSearch] = useState('');

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <ClipLoader color="#000" size={50} />
      </div>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mb-4 d-flex flex-wrap gap-2">
        <button className="btn btn-dark" onClick={getAllProducts}>
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-outline-dark"
            onClick={() => getProductsByCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h4 className="text-center">No products found</h4>
        )}
      </div>
    </>
  );
}

