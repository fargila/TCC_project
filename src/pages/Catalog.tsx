import React, { useState, useEffect } from 'react';
import Items from '../components/Items';
import { FaArrowLeft, FaArrowRight, FaCaretUp } from 'react-icons/fa';
import { Book } from '../types/Book'

interface CatalogProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
  onToggleWishlist: (book: Book) => void;
  wishlist: Book[];
  loading: boolean;
  onOpenBookDetails: (book: Book) => void;
}

const ITEMS_PER_PAGE = 20;

export const Catalog: React.FC<CatalogProps> = ({
  books,
  onAddToCart,
  onToggleWishlist,
  wishlist,
  loading,
  onOpenBookDetails,
}) => {
  const [currentBooks, setCurrentBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSideCategory, setSelectedSideCategory] = useState<string | null>(null);

  useEffect(() => {
    setTotalPages(Math.ceil(books.length / ITEMS_PER_PAGE));
  }, [books]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    setCurrentBooks(books.slice(startIndex, startIndex + ITEMS_PER_PAGE));
  }, [currentPage, books]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sideCategories = [
    'Tudo', 'Infantil', 'Ficção científica', 'Fantasia', 'Mistério', 'Romance', 'Terror', 'Crime', 'HQs',
    'Arte', 'Fotografia', 'Jurídico', 'História', 'Psicologia', 'Economia',
    'Maternidade', 'Poesía', 'Sexo', 'Viagem', 'Esporte', 'Política'
  ];

  const gridCategories = [
    'Programação', 'Culinária', 'Educação', 'Ficção', 'Saúde', 'Matemática', 'Medicina', 'Referência', 'Ciência'
  ];

  return (
    <div className='h-auto flex justify-center flex-col my-40'>
      <div className='h-auto flex w-full'>
        <div className='border border-black bg-gray-100 w-2/12 flex rounded-r-xl justify-between flex-col'>
          <div className='flex w-full flex-col'>
            <h1 className='text-4xl border-b-2 border-black font-bold pb-4 pl-3 bg-gray-300 rounded-tr-xl'>Categorias</h1>
            {sideCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSideCategory(category)}
                className={`pl-7 pb-2 border-b border-black flex justify-start text-left ${
                  selectedSideCategory === category ? 'bg-gray-400 font-bold' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className='w-full'>
            <button className='w-full flex justify-center border-t border-black bg-white items-center rounded-br-xl h-20'>
              <FaCaretUp />
            </button>
          </div>
        </div>

        <div className='ml-4 border border-black flex flex-col w-10/12 h-auto justify-between items-center mr-10'>
          <div className='w-full h-14 grid grid-cols-9'>
            {gridCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSideCategory(category)} // This should now work
                className={`pl-7 pb-2 border-b border-black flex justify-start text-left ${
                  selectedSideCategory === category ? 'bg-gray-400 font-bold' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-10">Loading books...</div>
          ) : (
            <Items
              books={currentBooks}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              wishlist={wishlist}
              onOpenBookDetails={onOpenBookDetails}  // Pass the fction if not used
            />
          )}

          <div className="flex justify-center mt-10 mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
              >
                <FaArrowLeft />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = currentPage <= 3
                  ? i + 1
                  : currentPage >= totalPages - 2
                    ? totalPages - 4 + i
                    : currentPage - 2 + i;

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-1 rounded border ${
                      currentPage === pageNum ? 'bg-blue-500 text-white' : 'border-gray-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {totalPages > 5 && (
                <>
                  <span className="px-1">...</span>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-3 py-1 rounded border ${
                      currentPage === totalPages ? 'bg-blue-500 text-white' : 'border-gray-300'
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;