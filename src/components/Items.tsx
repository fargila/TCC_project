import React, { useState } from 'react';
import BookDetails from './BookDetails';
import { Book } from '../types/Book'

interface ItemsProps {
  books: Book[];
  onToggleCart: (book: Book) => void;
  onToggleWishlist: (book: Book) => void;
  wishlist?: Book[];
  isInCart: (book: Book) => boolean;
  onOpenBookDetails?: (book: Book) => void;
}

const Items: React.FC<ItemsProps> = ({ 
  books,
  onToggleCart,
  onToggleWishlist,
  wishlist = [],
  isInCart,
  onOpenBookDetails
}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); 

  const getCoverUrl = (book: Book) => {
    return book.isbn?.[0]
      ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
      : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  };

  const handleBookClick = (book: Book) => {
    if (onOpenBookDetails) {
      onOpenBookDetails(book);
    } else {
      setSelectedBook(book);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {books.map((book) => (
          <div
            key={book.isbn?.[0] || book.cover_i}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleBookClick(book)}
          >
            <div className="relative pt-[150%] bg-gray-100">
              <img
                src={getCoverUrl(book)}
                alt={`Cover of ${book.title}`}
                className="absolute top-0 left-0 w-full h-full object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-book-cover.png';
                }}
              />
            </div>
            <div className="p-3 flex-grow">
              <h3 className="font-medium text-sm line-clamp-2 hover:text-blue-500">
                {book.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                {book.author_name?.join(', ') || 'Unknown Author'}
              </p>
              <p className="text-sm font-bold text-green-600 mt-2">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(book.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedBook && !onOpenBookDetails && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onToggleCart={onToggleCart}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={wishlist.some(item => item.isbn?.[0] === selectedBook.isbn?.[0])}
          isInCart={isInCart(selectedBook)}
        />
      )}
    </>
  );
};

export default Items;