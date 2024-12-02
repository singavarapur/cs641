import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    price: number;
    name: string;
    id: number;
    product: Product;
    quantity: number;
  }
  
interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) =>{
            const existingItem = prev.find(item => item.product.id === product.id);
            if (existingItem) {
              // If the product already exists in the cart, increase the quantity
              return prev.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            } else {
              // Otherwise, add the product with a quantity of 1
              return [...prev, { product, quantity: 1 }];
            }
          });
        };

        const removeFromCart = (id: number) => {
            setCart((prev) => prev.filter((item) => item.product.id !== id));
          };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};