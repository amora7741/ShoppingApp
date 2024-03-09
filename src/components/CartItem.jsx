function CartItem({ imageUrl, name, quantity, price }) {
  return (
    <div className='cart-item-card'>
      <img src={imageUrl} alt='' className='itemimg cartitemimg' />
      <div className='cart-card-right'>
        <p>{name}</p>
        <p>Qty: {quantity}</p>
        <p>Total: ${quantity * price}</p>
        <button id='remove' className='underline'>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
