import  { useState } from "react";
const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="modal">
      <h2>Your Cart</h2>
      <button onClick={onClose}>Close</button>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.name} />
            <p>
              {item.name} - ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
