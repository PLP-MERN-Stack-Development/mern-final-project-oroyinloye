import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Catalog() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Maize", price: 100 },
    { id: 2, name: "Rice", price: 200 },
    { id: 3, name: "Beans", price: 150 },
  ];

  return (
    <div>
      <h2>Catalog</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₦{p.price}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
