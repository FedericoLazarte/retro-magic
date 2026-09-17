import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Erro("useCart debe ser usado dentro de un CartProvider");
  }

  return context;
};

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (card, quantity) => {
    const getCard = cart.find((c) => c.id === card.id);

    if (getCard) {
      const updatedCart = cart.map((c) =>
        c.id === card.id ? { ...c, quantity: c.quantity + quantity } : c,
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...card, quantity }]);
    }
  };

  const deleteToCart = (card) => {
    const updatedCart = cart.filter((c) => c.id !== card.id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, card) => acc + card.price * card.quantity, 0);
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, card) => acc + card.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteToCart,
        clearCart,
        getCartQuantity,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
