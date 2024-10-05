const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: "1200",
    availability: "In Stock",
  };

  return (
    <div>
      <h1>Working with object </h1>
      <h3>Name:{product.name}</h3>
      <h3>Price:Rs.{product.name}</h3>
      <h3>Availability: {product.availability}</h3>
    </div>
  );
};

export default ProductInfo;
