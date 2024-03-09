import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import CartItem from './CartItem';

function CartPage() {
  const { cart, totalQuantity } = useOutletContext();

  const renderCartItem = (item) => (
    <CartItem
      imageUrl={item.item.image}
      name={item.item.title}
      quantity={item.quantity}
      price={item.item.price}
    />
  );

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
        <div className='checkout-container'>
          <h1>Checkout</h1>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
