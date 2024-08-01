import Button from "./Button";

function NavBar({ cartQuantity, openCart }) {
  return (
    <nav className="navbar">
      <div className="logo">Start bootstrap</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>
      <Button
        className="btn-cart"
        onClick={() => openCart((cartState) => !cartState)}>
        <span className="material-symbols-outlined">shopping_cart</span>Cart
        <span>{cartQuantity}</span>
      </Button>
    </nav>
  );
}

export default NavBar;
