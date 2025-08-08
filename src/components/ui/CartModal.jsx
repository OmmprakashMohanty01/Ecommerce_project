import { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// This component uses dummy data as requested.
// In a real app, you would pass cart state and handlers from your CartContext.
const CartModal = ({ isOpen, onClose }) => {
  const [dummyCart, setDummyCart] = useState([
    { id: 1, name: 'Fjallraven - Foldsack No. 1 Backpack', price: 109.95, quantity: 1, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
    { id: 2, name: 'Mens Casual Premium Slim Fit T-Shirts', price: 22.3, quantity: 2, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  ]);

  const handleQuantityChange = (id, amount) => {
    setDummyCart(
      dummyCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setDummyCart(dummyCart.filter(item => item.id !== id));
  };

  const subtotal = dummyCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            className="bg-white dark:bg-dark-surface w-full max-w-lg rounded-xl shadow-2xl flex flex-col"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">Your Cart</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex-grow overflow-y-auto max-h-[60vh]">
              {dummyCart.length === 0 ? (
                <p className="text-center text-text-secondary dark:text-dark-text-secondary">Your cart is empty.</p>
              ) : (
                <div className="space-y-6">
                  {dummyCart.map(item => (
                    <div key={item.id} className="flex items-start space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md border border-gray-200 dark:border-gray-700 p-1" />
                      <div className="flex-grow">
                        <p className="font-semibold text-text-primary dark:text-dark-text-primary">{item.name}</p>
                        <p className="text-sm text-primary dark:text-dark-primary">₹{item.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <button onClick={() => handleQuantityChange(item.id, -1)} className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300"><FaMinus size={12} /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(item.id, 1)} className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300"><FaPlus size={12} /></button>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveItem(item.id)} className="text-gray-400 hover:text-red-500"><FaTimes /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {dummyCart.length > 0 && (
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4 text-lg">
                  <span className="font-semibold text-text-secondary dark:text-dark-text-secondary">Subtotal</span>
                  <span className="font-bold text-text-primary dark:text-dark-text-primary">₹{subtotal.toFixed(2)}</span>
                </div>
                <Link to="/checkout" onClick={onClose}>
                  <button className="w-full bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;