import React, { useState } from 'react';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Wishlist from './components/WishList';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Default value is an empty array
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [modalContent, setModalContent] = useState<'cart' | 'wishlist' | null>(null);

  const handleAddToCart = (book: any) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const handleToggleWishlist = (book: any) => {
    setWishlistItems((prevItems) =>
      prevItems.some((item) => item.isbn === book.isbn)
        ? prevItems.filter((item) => item.isbn !== book.isbn)
        : [...prevItems, book]
    );
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <Router>
      <div className="App">
        <Header
          cartCount={cartItems.length}
          wishlistCount={wishlistItems.length}
          setModalContent={setModalContent}
        />

        <Routes>
          <Route
            path="/"
            element={<Catalog books={[]} onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} />}
          />
        </Routes>

        {modalContent === 'cart' && (
          <Cart cartItems={cartItems} onClose={handleCloseModal} />
        )}

        {modalContent === 'wishlist' && (
          <Wishlist wishlistItems={wishlistItems} onClose={handleCloseModal} />
        )}
      </div>
    </Router>
  );
};

export default App;
