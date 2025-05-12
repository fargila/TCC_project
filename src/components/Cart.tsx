import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa';
import { Book } from '../types/Book';

interface CartProps {
  cartItems: Book[];
  onClose: () => void;
  onUpdateCart: (updatedCart: Book[]) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems = [], onClose, onUpdateCart }) => {
  const [localCartItems, setLocalCartItems] = useState(cartItems);
  const [frete, setFrete] = useState(0);
  const [cupom, setCupom] = useState('');
  const [desconto, setDesconto] = useState(0);
  const [cupomMessage, setCupomMessage] = useState('');

  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  const handleIncreaseQuantity = (index: number) => {
    const updatedItems = [...localCartItems];
    updatedItems[index].quantity += 1;
    setLocalCartItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  const handleCupom = () => {
    if (cupom.trim().toUpperCase() === 'PROMO5') {
      setDesconto(0.05);
      setCupomMessage('Cupom aplicado com sucesso! (-5%)');
    } else {
      setDesconto(0);
      setCupomMessage('Cupom inválido.');
    }
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedItems = [...localCartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setLocalCartItems(updatedItems);
      onUpdateCart(updatedItems);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = localCartItems.filter((_, i) => i !== index);
    setLocalCartItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  const calculateSubtotal = () => {
    return localCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountValue = subtotal * desconto;
    return subtotal - discountValue + frete;
  };

  const handleFreteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    if (option === 'express') {
      setFrete(35);
    } else if (option === 'standard') {
      setFrete(15); 
    } else {
      setFrete(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-6xl flex h-5/6 rounded-lg overflow-hidden shadow-lg">
        
        {/* Left Side */}
        <div className="w-3/4 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Carrinho</h2>
              <span className="text-gray-600">{localCartItems.length} item(s)</span>
            </div>

            {localCartItems.length === 0 ? (
              <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              localCartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center gap-4 w-2/3">
                    <div className="w-16 h-20 bg-gray-300 flex-shrink-0 rounded" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        {item.author_name?.join(', ') || 'Autor Desconhecido'}
                      </p>
                      <button className="text-red-500 text-sm mt-1 hover:underline"
                        onClick={() => handleRemoveItem(index)}>
                        Remover
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-1/6 justify-center">
                    <button className="p-1 border rounded hover:bg-gray-100"
                      onClick={() => handleDecreaseQuantity(index)}>
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="w-12 text-center border rounded"
                    />
                    <button className="p-1 border rounded hover:bg-gray-100"
                      onClick={() => handleIncreaseQuantity(index)}>
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <div className="text-right w-1/6">
                    <p className="text-gray-700 font-medium">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6">
            <button
              onClick={onClose}
              className="inline-flex items-center text-gray-600 hover:text-black"
            >
              <FaArrowLeft className="mr-2" />
              Voltar
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/4 bg-gray-100 p-6 flex flex-col justify-between text-gray-800">
          <div>
            <h2 className="text-xl font-bold mb-4">Resumo do pedido</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(calculateSubtotal())}</span>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm">Frete</label>
              <select className="w-full border h-8 rounded px-2" onChange={handleFreteChange}>
                <option value="">Selecionar...</option>
                <option value="express">Expresso (menos de 1 dia)</option>
                <option value="standard">Padrão (3 a 5 dias)</option>
                <option value="economy">Econômico (10 dias - Grátis)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm">Cupom</label>
              <input
                type="text"
                placeholder="Digite o cupom"
                value={cupom}
                onChange={(e) => setCupom(e.target.value)}
                className="w-full border h-8 rounded px-2"
              />
              {cupomMessage && (
                <p className={`text-sm mt-1 ${cupomMessage.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
                  {cupomMessage}
                </p>
              )}
              <button
                className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                onClick={handleCupom}
              >
                Aplicar
              </button>
            </div>

            <div className="flex justify-between border-t pt-2 mt-2 font-semibold">
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calculateTotal())}
              </span>
            </div>
          </div>

          <button
            disabled={localCartItems.length === 0}
            className={`py-2 mt-6 rounded text-white ${localCartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-900'}`}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
