import React, { useState, useEffect } from 'react'
import Items from '../components/Items'
import { FaArrowLeft, FaArrowRight, FaCaretUp } from 'react-icons/fa'

interface Book {
  title: string;
  author_name?: string[];
  cover_i?: number;
  isbn?: string[];
  price?: string;
}

interface CatalogProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
  onToggleWishlist: (book: Book) => void;
}

const ITEMS_PER_PAGE = 20

export const Catalog: React.FC = () => {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [currentBooks, setCurrentBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cart, setCart] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

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
            price: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Math.floor(Math.random() * (250 - 30 + 1)) + 30)
          }));

        setAllBooks(processedBooks);
        setTotalPages(Math.ceil(processedBooks.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    setCurrentBooks(allBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE));
  }, [currentPage, allBooks]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onAddToCart = (book: Book) => {
    setCart(prevCart => [...prevCart, book]);
  };

  const onToggleWishlist = (book: Book) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(book)) {
        return prevWishlist.filter(b => b !== book);
      } else {
        return [...prevWishlist, book];
      }
    });
  };

  return (
    <div className='h-auto flex justify-center flex-col my-40'>
      <div className='h-auto flex w-full'>
        <div className='border border-black bg-gray-100 w-2/12 flex rounded-r-xl justify-between flex-col'>
          <div className='flex w-full flex-col'>
            <h1 className='text-4xl border-b-2 border-black font-bold pl-3 bg-gray-300 rounded-tr-xl'>
              Categorias
            </h1>
            <button className='text-2xl my-2 font-medium pl-3 flex justify-start'>Tudo</button>
            <h2 className='text-2xl mb-2 pl-3 flex justify-start'>Ficção literária</h2>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Infantil</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Ficção científica</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Fantasia</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Mistério</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Romance</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Terror</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Crime</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>HQs</button>
            <h2 className='text-2xl my-2 pl-3 flex justify-start'>Não ficção</h2>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Arte</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Fotografia</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Jurídico</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>História</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Psicologia</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Economia</button>
            <h2 className='text-2xl my-2 pl-3 flex justify-start'>Outros</h2>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Maternidade</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Poesía</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Sexo</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Viagem</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Esporte</button>
            <button className='pl-7 mb-2 border-b border-black flex justify-start'>Política</button>
          </div>

          <div className='w-full'>
            <button className='w-full flex justify-center border-t border-black bg-white items-center rounded-br-xl h-20'>
              <FaCaretUp />
            </button>
          </div>
        </div>

        <div className='ml-4 border border-black flex flex-col w-10/12 h-auto justify-between items-center mr-10'>
          <div className=' w-full h-14 grid grid-cols-9 '>
            <button className='h-full '>Programação</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Culinária</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Educação</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Ficção</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Saúde</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Matemática</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Medicina</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Referência</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Ciência</button>
          </div>

          {/* Items Component */}
          {loading ? (
            <div className="text-center py-10">Loading books...</div>
          ) : (
            <Items books={currentBooks} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} />
          )}

          {/* Pagination Controls */}
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
