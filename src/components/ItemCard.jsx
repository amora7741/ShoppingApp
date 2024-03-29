import React, { useState } from 'react';

import star from '../assets/star.svg';

function ItemCard({ id, name, imageUrl, price, rating, onAddToCart }) {
  const [buttonText, setButtonText] = useState('Add To Cart');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(quantity);

    setButtonText('Item Added');
    setTimeout(() => {
      setButtonText('Add To Cart');
    }, 2000);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className='item-card'>
      <img src={imageUrl} alt={name} className='itemimg' />
      <div className='item-card-right'>
        <p>{name}</p>
        <div className='rightcontainer'>
          <div className='item-info'>
            <p>${price}</p>
            <div className='rating'>
              <p>{rating}</p>
              <img src={star} alt='Rating star' id='ratingstar' />
            </div>
          </div>
          <hr />
          <div className='buttons'>
            <div className='quantity-selector'>
              <button className='decrement' onClick={decrementQuantity}>
                -
              </button>
              <input
                type='number'
                className='quantity-input'
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                min='1'
                step='1'
                name='quantity'
              />
              <button className='increment' onClick={incrementQuantity}>
                +
              </button>
            </div>
            <button id='addtocart' onClick={handleAddToCart}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
