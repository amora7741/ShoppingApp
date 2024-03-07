function ItemCard({ id, name, imageUrl }) {
  return (
    <div className='item-card'>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

export default ItemCard;
