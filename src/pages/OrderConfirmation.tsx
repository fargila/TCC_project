import { useEffect } from 'react';
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (!state?.order) {
      navigate('/');
    }
  }, [state, navigate]);

  const handleContinueShopping = () => {
    // Refresh the page and navigate to home
    window.location.href = '/';
  };

  if (!state?.order) return null;

  const { order } = state;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center
      rounded-b-3xl border-b-8 border-blue-300 ring-2 ring-black mt-20 mb-56">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
        <p className="text-lg mb-6">Obrigado por sua compra.</p>
        
        <div className="text-left mb-6 space-y-2">
          <p><strong>Número do pedido:</strong> #{order.id}</p>
          <p><strong>Data:</strong> {new Date(order.date).toLocaleDateString()}</p>
          <p><strong>Total:</strong> {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <p><strong>Pagamento:</strong> {
            order.paymentMethod === 'credit' ? `Cartão de Crédito (${order.installments}x)` :
            order.paymentMethod === 'debit' ? 'Cartão de Débito' :
            order.paymentMethod === 'pix' ? 'PIX' : 'Boleto'
          }</p>
          {order.paymentMethod === 'credit' && order.installments > 1 && (
            <p><strong>Valor por parcela:</strong> {order.monthlyValue?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          )}
        </div>

        <button
          onClick={handleContinueShopping}
          className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaShoppingCart />
          Continuar comprando
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;