import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "T-shirt", price: "120", color: "black" },
    { id: 2, name: "Pants", price: "100", color: "beige" },
    { id: 3, name: "shoes", price: "100", color: "white" },
  ];
  return (
    <div>
      <h1>Working with list and objects</h1>
      {products.map((p) => (
        <div key={p.id}>
          <h4>Name:{p.name}</h4>
          <h4>price:{p.price}</h4>
          <h4>color:{p.color}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
