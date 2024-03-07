function ItemCard({ id, name, imageUrl, price }) {
  return (
    <div className='item-card'>
      <img src={imageUrl} alt={name} />
      <div className='item-card-right'>
        <p>{name}</p>
        <div className='item-info'>
          <p>${price}</p>
          <p>In Stock</p>
        </div>
        <hr />
        <button>Add To cart</button>
      </div>
    </div>
  );
}

export default ItemCard;
