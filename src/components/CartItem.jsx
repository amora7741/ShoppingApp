function CartItem({ imageUrl, name, quantity, price, onClick }) {
  return (
    <div className='cart-item-card'>
      <div className='cart-item-image-container'>
        <img src={imageUrl} alt='' className='cart-item-image' />
      </div>
      <div className='cart-card-right'>
        <div className='cart-item-info'>
          <p className='cart-item-name'>{name}</p>
          <p>Qty: {quantity}</p>
          <p>Total: ${(quantity * price).toFixed(2)}</p>
        </div>
        <button id='remove' className='underline' onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
