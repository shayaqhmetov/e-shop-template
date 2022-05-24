import { createContext, useState } from 'react';

export const CartContext = createContext({
    showCart: false,
    setShowCart: () => false,
});

export const CartProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const value = { showCart, setShowCart};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}