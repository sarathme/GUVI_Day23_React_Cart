import Button from "./Button";

function Cart({ cartItems, removeFromCart, openCart }) {
  if (cartItems.length === 0) {
    return (
      <div className="cartItems">
        <p>No Items in the Cart</p>
        <Button onClick={() => openCart(false)}>Return to Products Page</Button>
      </div>
    );
  }

  return (
    <div className="cartItems">
      <h1>Cart Items</h1>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="cartItem">
          <div className="img-container">
            <img src="placeholder-img.jpg" alt="placeholder" />
          </div>
          <div className="item-details">
            <h3>{cartItem.name}</h3>
            {cartItem.disPrice ? (
              <p>
                <span className="strike">${cartItem.regPrice}.00</span> $
                {cartItem.disPrice}.00
              </p>
            ) : (
              <p>${cartItem.regPrice}.00</p>
            )}
          </div>
          <Button onClick={() => removeFromCart(cartItem)}>X</Button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
