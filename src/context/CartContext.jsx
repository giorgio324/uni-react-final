import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product, quantity = 1) => {
    const itemAlreadyInCart = cartItems.find((item) => item.id === product.id);
    /* if item is not in cart then add an object to array */
    if (!itemAlreadyInCart) {
      setCartItems((prevState) => [
        ...prevState,
        {
          id: product.id,
          title: product.title,
          description: product.description,
          imgUrl: product.imgUrl,
          price: product.price,
          category: product.category,
          quantity: quantity,
        },
      ]);
    } else {
      /* if there is an item find it based on id and then add quantity to it */
      setCartItems((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
