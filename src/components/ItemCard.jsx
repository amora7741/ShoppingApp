function ItemCard({ id, name, imageUrl, price, onAddToCart }) {
  return (
    <div className='item-card'>
      <img src={imageUrl} alt={name} />
      <div className='item-card-right'>
        <p>{name}</p>
        <div className='rightcontainer'>
          <div className='item-info'>
            <p>${price}</p>
            <p>In Stock</p>
          </div>
          <hr />
          <button id='addtocart' onClick={onAddToCart}>
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
