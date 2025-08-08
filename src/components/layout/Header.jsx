import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Context and Asset Imports
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { AuthContext } from '../../context/AuthContext';
import logoImg from '../../assets/images/logo.png'; // ✅ Fixed image import

const Header = ({ onCartClick }) => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const favoritesCount = favorites.length;

  // ✅ Updated navigation links to be data-driven
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Products' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className="bg-white dark:bg-dark-surface shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src={logoImg} width="125px" alt="Redstore Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-primary font-medium transition-colors ${
                  isActive ? 'text-primary dark:text-dark-primary' : ''
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-xl text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-primary">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          
          <Link to="/favorites" className="relative text-xl text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-primary">
            <FaHeart />
            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{favoritesCount}</span>
            )}
          </Link>
          <button
  onClick={onCartClick}
  className="relative text-xl text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-primary"
>
  <FaShoppingCart />
  {cartItemCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {cartItemCount}
    </span>
  )}
</button>


          {user ? (
            <button onClick={logout} className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition">
              Login
            </Link>
          )}

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl" aria-label="Open menu" aria-expanded={isMenuOpen}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-dark-surface shadow-lg absolute w-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg ${isActive ? 'text-primary dark:text-dark-primary' : 'text-text-secondary dark:text-dark-text-secondary'}`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;