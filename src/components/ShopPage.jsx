import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { RingLoader } from 'react-spinners';

import ItemCard from './ItemCard';

function ShopPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const { addToCart } = useOutletContext();

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products/');

      if (!response.ok) {
        throw new Error(`HTTP Error: Status Code ${response.status}`);
      }

      let itemsData = await response.json();

      setItems(itemsData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const renderItem = (item) => (
    <ItemCard
      key={item.id}
      id={item.id}
      name={item.title}
      imageUrl={item.image}
      price={item.price}
      rating={item.rating.rate}
      onAddToCart={(quantity) => addToCart(item, quantity)}
    />
  );

  if (error) {
    return <main className='shopping-container'>Server Error.</main>;
  }

  return (
    <main className='shopping-container'>
      {loading ? (
        <>
          <RingLoader color='#000' size={100} />
          <h1>LOADING</h1>
        </>
      ) : (
        <>
          <button id='sort'>Sort Items</button>
          <div className='item-container'>
            {items.map((item) => (
              <>{renderItem(item)}</>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default ShopPage;
