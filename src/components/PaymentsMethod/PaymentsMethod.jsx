import { React } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { createTokenCard } from '../../services/payments';
import './PaymentsMethod.scss';
import cardIcon from '../../figures/card_icon.svg';

function PaymentsMethod() {
  const elements = useElements();
  const stripe = useStripe();

  const bookingInfo = useSelector((state) => state.bookingInfo);

  const fetchCreateTokenCard = async (payload) => {
    const token = localStorage.getItem('token');
    await createTokenCard(payload, bookingInfo, token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      fetchCreateTokenCard(paymentMethod);
      elements.getElement(CardElement).clear();
    }
  };

  return (
    <div className="contPayments">
      <p className="contPayments__title">Métodos de pago</p>
      <div className="contPayments__methods">
        <div className="contPayments__methods--header">
          <img src={cardIcon} alt="card icon" className="contPayments__methods--imagenPay" />
          <p>Datos de la tarjeta</p>
        </div>
        <form className="contPayments__methods--strip" onSubmit={handleSubmit}>
          <div className="contPayments__methods--strip-card">
            <CardElement />
          </div>
          <div className="contPayments__methods--strip-button">
            <button type="submit">Realizar pago</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentsMethod;
