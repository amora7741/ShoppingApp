import { useOutletContext } from 'react-router-dom';

import CartItem from './CartItem';

function CartPage() {
  const { cart, setCart, totalQuantity, removeFromCart } = useOutletContext();

  const totalPrice = cart
    .reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    )
    .toFixed(2);

  const renderCartItem = (item) => (
    <CartItem
      imageUrl={item.item.image}
      name={item.item.title}
      quantity={item.quantity}
      price={item.item.price}
      onClick={() => removeFromCart(item)}
    />
  );

  const handleCheckout = () => {
    alert('Thank you for shopping!');
    setCart([]);
  };

  return (
    <main className='cartpage'>
      <div className='cart-header'>
        <h1>Cart: {totalQuantity} Item(s)</h1>
        <hr />
      </div>

      <div className='cart-container'>
        <div className='cart-item-container'>
          {cart.map((item) => (
            <>
              {renderCartItem(item)}
              <hr />
            </>
          ))}
        </div>
        {cart.length !== 0 && (
          <div className='checkout-container'>
            <p>Total: ${totalPrice}</p>
            <button id='checkout' onClick={() => handleCheckout()}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default CartPage;
