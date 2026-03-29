import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Online, Offline } from 'react-detect-offline';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <ProductProvider>
      <Online>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Online>
      <Offline>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="alert alert-danger text-center p-4 rounded shadow-sm">
            <h4>No Internet Connection</h4>
            <p>Please reconnect and try again</p>
          </div>
        </div>
      </Offline>
    </ProductProvider>
  );
}

export default App;