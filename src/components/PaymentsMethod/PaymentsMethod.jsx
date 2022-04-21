import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import cashIcon from '../../figures/cash_icon.svg';
import cardIcon from '../../figures/card_icon.svg';
import { createTokenCard } from '../../services/payments';
import './PaymentsMethod.scss';

function PaymentsMethod() {
  const elements = useElements();
  const stripe = useStripe();

  const fetchCreateTokenCard = async (tokenCard) => {
    await createTokenCard(tokenCard);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log('Payment method created!', paymentMethod);
      const payload = {
        mehod: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          amount: 10 * 100, // 10 US in cents
        }),
      };
      fetchCreateTokenCard(payload);
      elements.getElement(CardElement).clear();
      console.log('Succesfull token send to DB!');
    } else {
      console.log('Payment method error!', error);
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
