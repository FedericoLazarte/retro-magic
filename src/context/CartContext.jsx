import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }

  return context;
};

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (card, quantity) => {
    if (!quantity) {
      alert(`Debes elegir al menos una carta para agregar al carrito.`);
      return;
    }

    const getCard = cart.find((c) => c.id === card.id);

    if (getCard) {
      const newCount = Math.min(getCard.count + quantity, card.stock);
      const updatedCart = cart.map((c) =>
        c.id === card.id ? { ...c, count: newCount } : c,
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...card, count: quantity }]);
    }

    alert(`Se agrego la card correctamente.`);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((c) => c.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (id, count) => {
    if (count < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, count: Math.min(count, c.stock) } : c,
      ),
    );
  };

  const getCartTotal = () => {
    return cart.reduce((acc, card) => acc + card.price * card.count, 0);
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, card) => acc + card.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        setQuantity,
        getCartQuantity,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
