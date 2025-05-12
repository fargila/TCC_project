import React, { useState } from 'react';
import BookDetails from './BookDetails';
import { Book } from '../types/Book'

interface ItemsProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
  onToggleWishlist: (book: Book) => void;
  wishlist?: Book[];
}

const Items: React.FC<ItemsProps> = ({ books,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  }) => {
  
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); 

  const getCoverUrl = (book: Book) => {
    return book.isbn?.[0]
      ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
      : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-4 p-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => { 
              setSelectedBook(book);
            }}
          >
            <div className="relative pt-[150%] bg-gray-100">
              <img
                src={getCoverUrl(book)}
                alt={`Cover of ${book.title}`}
                className="absolute top-0 left-0 w-full h-full object-contain p-2"
              />
            </div>
            <div className="p-3 flex-grow">
              <h3 className="font-medium text-sm line-clamp-2 hover:text-blue-500">{book.title}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">{book.author_name?.[0] || 'Unknown Author'}</p>
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
      
      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}  // Close the selected book modal
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={
          selectedBook && selectedBook.isbn
            ? wishlist.some(item => item.isbn?.[0] === selectedBook.isbn?.[0])
            : false
          }
        />
      )}
    </>
  );
};

export default Items;
