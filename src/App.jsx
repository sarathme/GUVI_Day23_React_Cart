import { useState } from "react";
import Header from "./Header";
import "./index.css";

import ProductCard from "./ProductCard";
import ProductsBlock from "./ProductsBlock";
import Cart from "./Cart";

const products = [
  {
    id: 1,
    name: "Speacial Item",
    regPrice: 20,
    disPrice: 18,
  },
  {
    id: 2,
    name: "Sale Item",
    regPrice: 50,
    disPrice: 25,
  },
  {
    id: 3,
    name: "Popular Item",
    regPrice: 40,
    disPrice: 0,
  },
  {
    id: 4,
    name: "Sale Item",
    regPrice: 50,
    disPrice: 25,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function addtoCartHandler(product) {
    setCartItems((items) => [...items, product]);
  }

  function removeFromCartHandler(product) {
    setCartItems((items) => items.filter((item) => item.id != product.id));
  }

  return (
    <>
      <Header cartQuantity={cartItems.length} openCart={setCartIsOpen} />
      <ProductsBlock>
        {!cartIsOpen ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addtoCartHandler}
              removeFromCart={removeFromCartHandler}
            />
          ))
        ) : (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCartHandler}
            openCart={setCartIsOpen}
          />
        )}
      </ProductsBlock>
    </>
  );
}

export default App;
