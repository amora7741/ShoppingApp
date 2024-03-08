import React, { useState } from 'react';

function ItemCard({ id, name, imageUrl, price, onAddToCart }) {
  const [buttonText, setButtonText] = useState('Add To Cart');

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
    setButtonText('Item Added');
    setTimeout(() => {
      setButtonText('Add To Cart');
    }, 2000);
  };

  return (
    <div className='item-card'>
      <img src={imageUrl} alt={name} />
      <div className='item-card-right'>
        <p>{name}</p>
        <div className='rightcontainer'>
          <div className='item-info'>
            <p>${price}</p>
            <p>In Stock</p>
          </div>
          <hr />
          <button id='addtocart' onClick={handleAddToCart}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
