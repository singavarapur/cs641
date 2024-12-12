import React, { createContext, useContext, useState, ReactNode } from 'react';
import { db } from '../../config/firebaseConfig'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

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
    checkout:()=>void;
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
          setCart((prev) => {
            const existingItem = prev.find(item => item.product.id === id);
            if (existingItem) {
              if (existingItem.quantity > 1) {
                  // If the quantity is greater than 1, reduce the quantity by 1
                  return prev.map(item =>
                      item.product.id === id
                          ? { ...item, quantity: item.quantity - 1 }
                          : item
                  );
                } else {
                  // If the quantity is 1, remove the item from the cart
                  return prev.filter(item => item.product.id !== id);
              }
          }
          return prev;
          });
          };

          const checkout = async () => {
            try {
                // Store the cart details in Firestore
                await addDoc(collection(db, 'orders'), {
                    items: cart,
                    createdAt: new Date(),
                });
        
                // Optionally clear the cart after checkout
                setCart([]);
                console.log("Checkout successful, cart details stored.");
            } catch (error) {
                console.error("Error during checkout: ", error);
            }
        };



    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,checkout}}>
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