import React from 'react';
import { FaShoppingCart, FaStar, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  setModalContent: React.Dispatch<React.SetStateAction<'cart' | 'wishlist' | null>>;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  setModalContent,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPurchasePage = location.pathname === '/purchase';

  const handleCartClick = () => {
    setModalContent('cart');
  };

  const handleWishlistClick = () => {
    setModalContent('wishlist');
  };

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
            <div className="flex h-1/2 w-1/2">
              <input
                className="w-3/4 border border-black rounded-l-xl pl-4"
                type="text"
                placeholder="Pesquisar livros..."
              />
              <button className="flex items-center px-2 w-1/12 border border-black rounded-r-xl bg-gray-800 text-white justify-center">
                <FaSearch />
              </button>
            </div>
          )}

          <div className="flex items-center gap-10">
            <button
              onClick={handleCartClick} 
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
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
              className="flex flex-col items-center hover:text-blue-800 transition-colors"
            >
              <div className="relative">
                <FaStar size={24} className="text-blue-400" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-sm">Lista de Desejos</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
