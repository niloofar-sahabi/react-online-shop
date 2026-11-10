import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    const isExist = cartItems.find((item) => item.id === itemId);

    if (isExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId && i.count > 0) {
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        }
        return i;
      }),
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
