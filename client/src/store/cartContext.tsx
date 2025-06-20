import { createContext, useContext } from "react";
export const CartContext = createContext({ fetchCartCount: () => {} });
export const useCart = () => useContext(CartContext);

