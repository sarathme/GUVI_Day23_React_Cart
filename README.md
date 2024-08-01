# Day 23 React Cart

## Running devlopment server

1. Navigate to the project folder.

2. Run the below commands in the terminal or shell.

```shell
npm install # To install the dependencie for the project and the revoke node_modules folder.

npm run dev # Start a new devlopment server
```

3. You will be provided with a local host server with a port number. Click on
   the url to view the web application.

## Project implementations

### Passing products as props

1. I came up with an array of products to be sold and structured as a javaScript
   object as shown below in the App.jsx file

```js
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
```

2. Looped through the products array and pass each product as props to the
   Product Component.

```jsx
products.map((product) => (
  <ProductCard
    key={product.id}
    product={product} /*Passing each product as props.*/
    addToCart={addtoCartHandler}
    removeFromCart={removeFromCartHandler}
  />
));
```

3. Same approach is done for passing cart but the whole cart array is passed.

```jsx
// App Component.
function App() {
  //......
  //......
  //......

  {
    <Cart
      cartItems={cartItems} /*Passing entire cart state to the Cart Component */
      removeFromCart={removeFromCartHandler}
      openCart={setCartIsOpen}
    />;
  }
}

// Cart Component

function Cart({ cartItems, removeFromCart, openCart }) {
  //.....
  //.....
  //.....
  //.....

  {
    cartItems.map((cartItem) => (
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
    ));
  }
}
```

### Working with states

1. In App component I have used two states one for initializing Cart array and
   another one to open or close cart (Boolean)

```jsx
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  /*

{Remaining code see App.jsx}

*/
}
```

## Handler functions (Lifting State Up)

### Adding items to the cart array

1. Inorder add items to the cart I mutated the cartItems state variable.

2. Created a handler function **_handleAddToCart_** which is called by the
   Button Component in the Product Component when it is clicked.

3. inside the handler function we call the addToCart prop which inturn hooked
   with the addtoCartHandler function in App Component.

4. Passing the respective product to the **_addtoCartHandler_** function in the
   App component.

5. **_addtoCartHandler_** adds the received product to the cart state variable
   by using **_setCartItems_** function as shown below in the code snippet.

```jsx
// ProductCard Component.

function ProductCard({ product, addToCart, removeFromCart, cartItems }) {
  // This is to manipulate the buttons.
  const inCart = cartItems.some((item) => item.id === product.id);


  function handleAddToCart() {
    addToCart(product);
    setProductAddedToCart(true);
  }

  // ....

  {
    <Button onClick={handleAddToCart}>Add to Cart</Button>;
  }
}

// App Component
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function addtoCartHandler(product) {
    setCartItems((items) => [...items, product]);
  }

  //....

  {!cartIsOpen ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addtoCartHandler}
              removeFromCart={removeFromCartHandler}
            />
          ))
}
}
```

### Removing items from the cart array

1. Inorder to remove items from the cart the above expained approach is used
   here by hooking the **_removeFromCartHandler_** function in App Component to
   respective button in the ProductCard Component.

```jsx
// ProductCard Component.

function ProductCard({ product, addToCart, removeFromCart, cartItems }) {
  const inCart = cartItems.some((item) => item.id === product.id);


  function handleRemoveFromCart() {
    removeFromCart(product);
    setProductAddedToCart(false);
  }

  // ....

  {
    <Button onClick={handleAddToCart}>Add to Cart</Button>;
  }
}

// App Component
function App() {
    const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function removeFromCartHandler(product) {
    setCartItems((items) => items.filter((item) => item.id != product.id));
  }

  //....

  {!cartIsOpen ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addtoCartHandler}
              removeFromCart={removeFromCartHandler}
            />
          ))
}

}
```
