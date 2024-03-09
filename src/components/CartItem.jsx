function CartItem({ imageUrl, name, quantity, price }) {
  return (
    <div className='cart-item-card'>
      <div className='cart-card-left'>
        <img src={imageUrl} alt='' className='itemimg cartitemimg' />
      </div>
    </div>
  );
}

export default CartItem;
