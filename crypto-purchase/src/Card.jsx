import React, { useState } from 'react';

const Card = ({ name, price, onBuy }) => {
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => {
    if (quantity > 0) {
      onBuy({ name, price, quantity });
      setQuantity(0);
    } else {
      alert('Please enter a quantity.');
    }
  };

  return (
    <div className="crypto-card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="0"
      />
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default Card;
