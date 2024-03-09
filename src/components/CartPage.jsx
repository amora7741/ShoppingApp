import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function CartPage() {
  const { cart, totalQuantity } = useOutletContext();

  return (
    <main className='cartpage'>
      <div className='cart-header'>
        <h1>Cart: {totalQuantity} Items</h1>
        <hr />
      </div>
    </main>
  );
}

export default CartPage;
