const Product = ({ title, description, category, price }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
