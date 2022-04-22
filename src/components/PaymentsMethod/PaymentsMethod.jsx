import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import cashIcon from '../../figures/cash_icon.svg';
import cardIcon from '../../figures/card_icon.svg';
import { createTokenCard } from '../../services/payments';
import './PaymentsMethod.scss';

function PaymentsMethod() {
  const elements = useElements();
  const stripe = useStripe();

  const fetchCreateTokenCard = async (payload) => {
    await createTokenCard(payload);
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
      <p>Métodos de pago</p>
      <div className="contPayments__methods">
        <form className="contPayments__methods--strip" onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Submit</button>
        </form>
        <img src={cardIcon} alt="card icon" className="contPayments__methods--imagenPay" />
        <img src={cashIcon} alt="cash icon" className="contPayments__methods--imagenPay" />
      </div>
    </div>
  );
}

export default PaymentsMethod;
