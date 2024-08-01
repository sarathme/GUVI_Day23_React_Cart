import { useState } from "react";
import Button from "./Button";
import "./ProductCard.css";

function ProductCard({ product, addToCart, removeFromCart }) {
  const [productAddedToCart, setProductAddedToCart] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setProductAddedToCart(true);
  }
  function handleRemoveFromCart() {
    removeFromCart(product);
    setProductAddedToCart(false);
  }
  return (
    <div className="card">
      <img src="placeholder-img.jpg" alt="placeholder" />
      <div className="card-details">
        <h2>{product.name}</h2>

        {product.disPrice ? (
          <p>
            <span>${product.regPrice}.00</span> ${product.disPrice}.00
          </p>
        ) : (
          <p>${product.regPrice}.00</p>
        )}
      </div>
      {productAddedToCart ? (
        <Button onClick={handleRemoveFromCart}>Remove from Cart</Button>
      ) : (
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      )}
    </div>
  );
}

export default ProductCard;
