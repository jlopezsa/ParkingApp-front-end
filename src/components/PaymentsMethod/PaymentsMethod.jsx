import React from 'react';
import cashIcon from '../../figures/cash_icon.svg';
import cardIcon from '../../figures/card_icon.svg';
import './PaymentsMethod.scss';

function PaymentsMethod() {
  return (
    <div className="contPayments">
      <p>Métodos de pago</p>
      <div className="contPayments__methods">
        <img src={cashIcon} alt="cash icon" className="contPayments__methods--imagenPay" />
        <img src={cardIcon} alt="card icon" className="contPayments__methods--imagenPay" />
      </div>
    </div>
  );
}

export default PaymentsMethod;
