import Button from "./Button";
import "./ProductCard.css";

function ProductCard({ product, addToCart, removeFromCart, cartItems }) {
  const inCart = cartItems.some((item) => item.id === product.id);

  function handleAddToCart() {
    addToCart(product);
  }
  function handleRemoveFromCart() {
    removeFromCart(product);
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
      {inCart ? (
        <Button onClick={handleRemoveFromCart}>Remove from Cart</Button>
      ) : (
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      )}
    </div>
  );
}

export default ProductCard;
