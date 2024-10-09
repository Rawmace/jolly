import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "T-shirt", price: 120, color: "black" },
    { id: 2, name: "Pants", price: 100, color: "beige" },
    { id: 3, name: "Shoes", price: 100, color: "white" },
  ];

  return (
    <div>
      <h1>Working with list and objects</h1>
      {products.map((p) => (
        <div key={p.id}>
          <p>
            <strong>Name:</strong> {p.name}
          </p>
          <p>
            <strong>Price:</strong> ${p.price}
          </p>
          <p>
            <strong>Color:</strong> {p.color}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
