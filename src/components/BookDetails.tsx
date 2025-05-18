import React from 'react';
import { FaTimes, FaHeart, FaRegHeart, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { Book } from '../types/Book';

interface BookDetailsProps {
  book: Book;
  onClose: () => void;
  onToggleCart: (book: Book) => void;
  onToggleWishlist: (book: Book) => void;
  isInWishlist: boolean;
  isInCart: boolean;
}

const BookDetails: React.FC<BookDetailsProps> = ({ 
  book, 
  onClose,
  onToggleCart,
  onToggleWishlist,
  isInWishlist,
  isInCart
}) => {
  const getCoverUrl = (size: 'S' | 'M' | 'L' = 'L') => {
    if (book.isbn?.[0]) {
      return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-${size}.jpg`;
    }
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-${size}.jpg`;
    }
    return '/placeholder-book-cover.png';
  };

  const handleToggleCart = () => {
    onToggleCart({
      ...book,
      coverUrl: getCoverUrl('M')
    });
  };

  const handleToggleWishlist = () => {
    onToggleWishlist(book);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
            aria-label="Fechar detalhes"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <img
              src={getCoverUrl('L')}
              alt={`Capa de ${book.title}`}
              className="w-full h-64 object-contain bg-gray-100 rounded-lg border border-gray-200"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-book-cover.png';
                target.classList.add('p-4');
              }}
            />
          </div>

          <div className="w-full md:w-2/3">
            <div className="space-y-4">
              <p className="text-xl font-semibold">{book.author_name?.join(', ') || 'Autor Desconhecido'}</p>
              <p className="text-3xl font-bold text-green-600">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(book.price)}
              </p>
              
              {book.first_publish_year && (
                <p><span className="font-medium">Publicado em:</span> {book.first_publish_year}</p>
              )}

              <div>
                <h3 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-2">Enredo</h3>
                <p className="text-gray-700 mb-6">
                  {book.description?.value || 'Descrição não disponível'}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleToggleWishlist}
                aria-label={isInWishlist ? "Remover da lista de desejos" : "Adicionar à lista de desejos"}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  isInWishlist 
                    ? 'border-red-500 text-red-600 bg-red-50' 
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                {isInWishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                <span>{isInWishlist ? 'Na Lista' : 'Lista de Desejos'}</span>
              </button>
              
              <button 
                onClick={handleToggleCart}
                aria-label={isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  isInCart
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-gray-800 bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {isInCart ? <FaCheck className="text-green-500" /> : <FaShoppingCart />}
                <span>{isInCart ? 'No Carrinho' : 'Adicionar ao Carrinho'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;