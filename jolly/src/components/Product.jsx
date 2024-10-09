const Product = (hola) => {
  // const Product=({name, price})=>{ return } can also be done this way
  return (
    <div>
      <h2>Product Name:{hola.name}</h2>

      <p>Price of the product:{hola.price}</p>
    </div>
  );
};
export default Product;
