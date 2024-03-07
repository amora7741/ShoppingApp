import React, { useState } from 'react';
import { useEffect } from 'react';

import { BeatLoader } from 'react-spinners';

function ShopPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clothing, setClothing] = useState([]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products/');

      if (!response.ok) {
        throw new Error(`HTTP Error: Status Code ${response.status}`);
      }

      let clothingData = await response.json();

      setClothing(clothingData);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      {loading ? <BeatLoader color='#000' size={25} /> : <h1>Done Loading</h1>}
    </main>
  );
}

export default ShopPage;
