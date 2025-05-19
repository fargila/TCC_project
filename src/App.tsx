import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Purchase from './pages/Purchase';
import OrderConfirmation from './pages/OrderConfirmation';
import Cart from './components/Cart';
import Wishlist from './components/WishList';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
import { Book } from './types/Book';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Main app content that requires navigation
const AppContent = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Book[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Book[]>([]);
  const [modalContent, setModalContent] = useState<'cart' | 'wishlist' | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://openlibrary.org/search.json?q=subject:fiction&limit=100&fields=title,author_name,cover_i,isbn,first_publish_year'
        );
        const data = await response.json();

        const processedBooks = data.docs
          .filter((book: Book) => book.isbn?.[0] || book.cover_i)
          .map((book: Book) => ({
            ...book,
            price: parseFloat(((Math.random() * (250 - 30)) + 30).toFixed(2))
          }));

        setBooks(processedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleUpdateCart = (updatedCart: Book[]) => {
    setCartItems(updatedCart);
  };

  const handleToggleCart = (book: Book) => {
    setCartItems(prevItems => {
      const isAlreadyInCart = prevItems.some(item => item.isbn?.[0] === book.isbn?.[0]);
      if (isAlreadyInCart) {
        return prevItems.filter(item => item.isbn?.[0] !== book.isbn?.[0]);
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const handleToggleWishlist = (book: Book) => {
    setWishlistItems(prevItems =>
      prevItems.some((item) => item.isbn?.[0] === book.isbn?.[0])
        ? prevItems.filter((item) => item.isbn?.[0] !== book.isbn?.[0])
        : [...prevItems, book]
    );
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setSelectedBook(null);
  };

  const handleOpenBookDetails = (book: Book) => {
    setSelectedBook(book);
  };

  const isInWishlist = (book: Book) => {
    return wishlistItems.some((item) => item.isbn?.[0] === book.isbn?.[0]);
  };

  const isInCart = (book: Book) => {
    return cartItems.some((item) => item.isbn?.[0] === book.isbn?.[0]);
  };

  return (
    <div className="App">
      <Header
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        setModalContent={setModalContent}
      />

      <Routes>
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route
          path="/"
          element={
            <Catalog
              books={books}
              onToggleCart={handleToggleCart}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlistItems}
              loading={loading}
              onOpenBookDetails={handleOpenBookDetails}
            />
          }
        />
        <Route 
          path="purchase" 
          element={
            <Purchase 
              cartItems={cartItems}
              onNavigateBack={() => navigate('/')}
            />
          } 
        />
      </Routes>

      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={handleCloseModal}
          onToggleCart={handleToggleCart}
          onToggleWishlist={handleToggleWishlist}
          isInWishlist={isInWishlist(selectedBook)}
          isInCart={isInCart(selectedBook)}
        />
      )}

      {modalContent === 'cart' && (
        <Cart 
          cartItems={cartItems}
          onClose={handleCloseModal}
          onUpdateCart={handleUpdateCart}
          onPurchase={() => {
            handleCloseModal();
            navigate('/purchase');
          }}
        />
      )}

      {modalContent === 'wishlist' && (
        <Wishlist
          wishlistItems={wishlistItems}
          onClose={handleCloseModal}
          onToggleCart={handleToggleCart}
          onToggleWishlist={handleToggleWishlist}
          isInCart={isInCart}
        />
      )}

      <Footer />
      <ToastContainer />
    </div>
  );
};

// Main App component with Router
const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;