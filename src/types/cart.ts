// utils/cart.ts
import { Book } from '../types/Book';

const CART_KEY = 'bookstore_cart';

export const getCartItems = (): Book[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

export const addToCart = (book: Book) => {
  const cartItems = getCartItems();
  const existingItem = cartItems.find(item => item.isbn?.[0] === book.isbn?.[0]);
  
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cartItems.push({ ...book, quantity: 1 });
  }
  
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  return cartItems;
};

export const removeFromCart = (isbn: string) => {
  const cartItems = getCartItems().filter(item => item.isbn?.[0] !== isbn);
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  return cartItems;
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

export const updateCartItemQuantity = (isbn: string, quantity: number) => {
  const cartItems = getCartItems();
  const item = cartItems.find(item => item.isbn?.[0] === isbn);
  
  if (item) {
    item.quantity = quantity;
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }
  
  return cartItems;
};