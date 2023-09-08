import React, { useState } from 'react';
import Card from './Card';


const Store = () => {
  const [cart, setCart] = useState([]);
  const cryptocurrencies = [
    { name: 'Bitcoin', price: 40000 },
    { name: 'Ethereum', price: 2800 },
    { name: 'Litecoin', price: 150 },
  ];

  const handleBuy = (crypto) => {
    setCart([...cart, crypto]);
  };

  const getTotalCost = () => {
    return cart.reduce((total, crypto) => total + crypto.price * crypto.quantity, 0);
  };

  const removeCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h1>Crypto Purchase</h1>
      <div className="list">
        {cryptocurrencies.map((crypto, index) => (
          <Card
            key={index}
            name={crypto.name}
            price={crypto.price}
            onBuy={handleBuy}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            <ul>
              {cart.map((crypto, index) => (
                <li key={index}>
                  {crypto.name} x{crypto.quantity} - ${crypto.price * crypto.quantity}
                  <button className='removeBtn' onClick={() => removeCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${getTotalCost()}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Store;