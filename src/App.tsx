import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Wishlist from './components/WishList';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
import { Book } from './types/Book';  // Import the Book type

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Book[]>([]); // Manages items in the cart
  const [wishlistItems, setWishlistItems] = useState<Book[]>([]); // Manages items in the wishlist
  const [modalContent, setModalContent] = useState<'cart' | 'wishlist' | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // For book modal
  const [books, setBooks] = useState<Book[]>([]); // Store books data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

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
            price: parseFloat((Math.random() * (250 - 30) + 30).toFixed(2))
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
    setCartItems(updatedCart); // Update the cart in the parent component
  };

  const handleAddToCart = (book: Book) => {
    setCartItems((prevItems) => [...prevItems, { ...book, quantity: 1 }]); // Add book to the cart
  };

  const handleToggleWishlist = (book: Book) => {
    setWishlistItems((prevItems) =>
      prevItems.some((item) => item.isbn === book.isbn)
        ? prevItems.filter((item) => item.isbn !== book.isbn)
        : [...prevItems, book]
    ); // Toggle wishlist state
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setSelectedBook(null); // Close the modal
  };

  const handleOpenBookDetails = (book: Book) => {
    setSelectedBook(book); // Open the book details modal
  };

  const isInWishlist = (book: Book) => {
    return wishlistItems.some((item) => item.isbn === book.isbn); // Check if book is in the wishlist
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
            element={
              <Catalog
                books={books} // Pass books to Catalog component
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlist={wishlistItems}
                loading={loading}  // Pass loading state if needed
                onOpenBookDetails={handleOpenBookDetails}  // Pass the function for opening book details
              />
            }
          />
        </Routes>

        {selectedBook && (
          <BookDetails
            book={selectedBook}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist(selectedBook)} // Check if the book is in the wishlist
          />
        )}

        {modalContent === 'cart' && (
          <Cart 
          cartItems={cartItems}
          onClose={handleCloseModal}
          onUpdateCart={handleUpdateCart} />
        )}

        {modalContent === 'wishlist' && (
          <Wishlist
            wishlistItems={wishlistItems}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
