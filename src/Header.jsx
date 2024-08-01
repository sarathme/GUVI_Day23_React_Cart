import "./Header.css";
import NavBar from "./NavBar";

function Header({ cartQuantity, openCart }) {
  return (
    <header className="header">
      <NavBar cartQuantity={cartQuantity} openCart={openCart} />
      <div className="hero">
        <h1>Shop in style</h1>
        <p>With this shop hompeage template</p>
      </div>
    </header>
  );
}

export default Header;
