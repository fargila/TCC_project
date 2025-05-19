import React from 'react';
import { FaTimes, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { Book } from '../types/Book';

interface WishlistProps {
  wishlistItems: Book[];
  onClose: () => void;
  onToggleCart: (book: Book) => void;
  onToggleWishlist: (book: Book) => void;
  isInCart: (book: Book) => boolean;
}

const Wishlist: React.FC<WishlistProps> = ({
  wishlistItems = [], 
  onClose,
  onToggleCart,
  onToggleWishlist,
  isInCart 
}) => {
  const getCoverUrl = (isbn: string, size: 'S' | 'M' | 'L' = 'M') => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
  };

  const handleToggleCart = (book: Book) => {
    onToggleCart({
      ...book,
      coverUrl: getCoverUrl(book.isbn?.[0] || '', 'M')
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">Lista de desejos</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
            aria-label="Fechar wishlist"
          >
            <FaTimes />
          </button>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center mt-8">
            <p>Sua lista de desejos está vazia.</p>
          </div>
        ) : (
          <div className="space-y-4 ">
            {wishlistItems.map((item) => {
              const bookInCart = isInCart(item);
              return (
                <div key={item.isbn?.[0] || item.cover_i} className="flex items-center justify-between p-4 border-b border-gray-200 rounded-lg">
                  <div className="flex items-center gap-6">
                    <img
                      src={getCoverUrl(item.isbn?.[0] || '', 'S')}
                      alt={`Capa de ${item.title}`}
                      className="w-16 h-24 object-cover bg-gray-100 rounded-lg border border-gray-200"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-book-cover.png';
                        target.classList.add('p-4');
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.author_name?.join(', ') || 'Autor Desconhecido'}</p>
                      <p className="font-semibold text-green-600">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(item.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleToggleCart(item)}
                      disabled={bookInCart}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                        bookInCart
                          ? 'border-green-500 text-green-600 bg-green-50'
                          : 'border-gray-800 bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                      aria-label={bookInCart ? "Livro já está no carrinho" : "Adicionar ao carrinho"}
                    >
                      {bookInCart ? <FaCheck className="text-green-500" /> : <FaShoppingCart />}
                      <span>{bookInCart ? 'No Carrinho' : 'Adicionar'}</span>
                    </button>
                    <button
                      onClick={() => onToggleWishlist(item)}
                      className="flex items-center gap-1 text-red-600 hover:text-red-700"
                    >
                      <FaTimes />
                      <span>Remover</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;