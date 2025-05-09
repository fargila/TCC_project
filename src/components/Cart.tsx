import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface CartProps {
  cartItems: any[];
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems = [], onClose }) => {  // Default to empty array
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">Carrinho</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
            aria-label="Fechar carrinho"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm">{item.author_name?.join(', ') || 'Autor Desconhecido'}</p>
                  <p className="text-lg text-green-600">{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
