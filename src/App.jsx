import { useState } from 'react'; // ✅ Add useState
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import Products from './pages/Products';       // ✅ Import
import ProductDetail from './pages/ProductDetail'; // ✅ Import
import About from './pages/About';             // ✅ Import
import Contact from './pages/Contact';         // ✅ Import

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Debug from './utils/Debug';
import ScrollToTop from './components/ui/ScrollToTop'; // ✅ Add ScrollToTop
import CartModal from './components/ui/CartModal';     // ✅ Add CartModal

import './styles/App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅ Control cart modal

  return (
    <div className="font-poppins bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary transition-colors duration-300">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products" element={<Products />} />             {/* ✅ Add route */}
          <Route path="/products/:productId" element={<ProductDetail />} /> {/* ✅ Add route */}
          <Route path="/about" element={<About />} />                   {/* ✅ Add route */}
          <Route path="/contact" element={<Contact />} />              {/* ✅ Add route */}
        </Routes>
      </main>
      <Footer />
      <ScrollToTop /> {/* ✅ From first file */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} /> {/* ✅ From first file */}
      {import.meta.env.DEV && <Debug />}
    </div>
  );
}

export default App;
