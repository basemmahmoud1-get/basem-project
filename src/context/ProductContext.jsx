import React, { createContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      const uniqueCategories = [...new Set(productsData.map(p => p.category))];
      setCategories(uniqueCategories);
      setLoading(false);
    }, 500);
  }, []);

  const getAllProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 300);
  };

  const getProductsByCategory = (category) => {
    setLoading(true);
    setTimeout(() => {
      const filtered = productsData.filter(p => p.category === category);
      setProducts(filtered);
      setLoading(false);
    }, 300);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        getAllProducts,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};