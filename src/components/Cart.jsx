import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Orange Slices', price: 25.00, qty: 1, img: '/images/orange.jpg' },
    { id: 2, name: 'Kiwi Pack', price: 30.00, qty: 2, img: '/images/kiwi.jpg' },
    { id: 3, name: 'Blueberries', price: 25.00, qty: 1, img: '/images/blueberries.jpg' },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);


  return (
    <div className="absolute z-[999] will-change-transform mr-8 w-md min-h-screen bg-green-800 rounded-lg text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-white">Your cart is empty 🍌</p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-amber-50 text-green-900 flex items-center justify-between rounded-xl p-4 shadow">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm">${item.price.toFixed(2)} × {item.qty}</p>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="text-right text-xl font-bold text-yellow-300 mt-6">
            Total: ${total} 🍍
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-3 rounded mt-4">
            Proceed to Checkout 🍓
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
