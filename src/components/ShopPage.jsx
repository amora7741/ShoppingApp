import React, { useState } from 'react';
import { useEffect } from 'react';

function ShopPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products/');

      if (!response.ok) {
        throw new Error(`HTTP Error: Status Code ${response.status}`);
      }

      let clothingData = await response.json();

      console.log(clothingData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Hello There</h1>
      <h2>This is my shop page</h2>
    </main>
  );
}

export default ShopPage;
