import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaStar, FaEraser, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Book } from '../types/Book';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  setModalContent: React.Dispatch<React.SetStateAction<'cart' | 'wishlist' | null>>;
  books: Book[];
  setFilteredBooks: (books: Book[]) => void;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  setModalContent,
  books,
  setFilteredBooks
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPurchasePage = location.pathname === '/purchase';
  const isOrderConfirmationPage = location.pathname === '/order-confirmation';
  const [searchQuery, setSearchQuery] = useState('');

  const handleCartClick = () => {
    setModalContent('cart');
  };

  const handleWishlistClick = () => {
    setModalContent('wishlist');
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredBooks(books); 
      return;
    }

    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author_name?.some(author => 
        author.toLowerCase().includes(searchQuery.toLowerCase())
    ));
    
    setFilteredBooks(filtered);
  }, [searchQuery, books, setFilteredBooks]);

  if (isOrderConfirmationPage) {
    return null;
  }

  return (
    <>
      <header className="z-50 flex justify-end h-32 text-2xl rounded-b-3xl border-b-4 border-blue-300 ring-2 ring-black fixed w-full top-0 flex-col text-lg bg-white">
        <div className="flex justify-between w-full bg-gray-700 h-1/3 text-gray-200 items-center">
          <div className="flex justify-start ml-4"><p>React Edition</p></div>
          <div className="flex justify-end mt-1">
            <button className="mr-10 text-gray-300 hover:text-white active:text-blue-600 transition duration-200">
              Logar
            </button>
            <button className="mr-10 text-gray-300 hover:text-white active:text-blue-600 transition duration-200">
              Minha conta
            </button>
            <button className="mr-10 text-gray-300 hover:text-white active:text-blue-600 transition duration-200">
              Configurações
            </button>
            <button className="mr-10 text-gray-300 hover:text-white active:text-blue-600 transition duration-200">
              Ajuda
            </button>
          </div>
        </div>

        <div className="rounded-b-3xl w-full h-2/3 flex justify-between px-20 items-center">
          {isPurchasePage ? (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaArrowLeft size={20} />
              <span className="text-lg">Voltar ao Catálogo</span>
            </button>
          ) : (
            <div className="flex h-1/2 w-1/2 relative">
              <input
                className="w-full border-2 border-gray-300 rounded-l-xl pl-4 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                type="text"
                placeholder="Pesquisar livros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className={`flex items-center justify-center w-14 rounded-r-xl transition-all duration-300 ${
                  searchQuery 
                    ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
                }`}
                onClick={() => setSearchQuery('')}
                aria-label={searchQuery ? "Clear search" : "Search"}
              >
                {searchQuery ? (
                  <FaEraser className="transform hover:scale-110 active:scale-95 transition-transform" />
                ) : (
                  <FaSearch className="transform hover:scale-110 active:scale-95 transition-transform" />
                )}
              </button>
            </div>
          )}

          {!isPurchasePage && (
            <div className="flex items-center gap-10">
              <button
                onClick={handleCartClick} 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors
                font-medium"
              >
                <div className="relative">
                  <FaShoppingCart size={24} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>Carrinho</span>
              </button>

              <div className="w-px bg-gray-400 h-16"></div>

              <button
                onClick={handleWishlistClick}
                className="flex flex-col items-center hover:text-blue-600 transition-colors"
              >
                <div className="relative">
                  <FaStar size={24} className="text-blue-600 border-2 border-blue-500
                  rounded-full" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="font-medium">Lista de Desejos</span>
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;