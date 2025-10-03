// PaypalCheckoutButton2.jsx
import React from 'react';

const PaypalCheckoutButton2 = ({ product }) => {
  const handlePayment = () => {
    // Logique de paiement PayPal
    console.log('Processing payment for', product.description, 'with price', product.price);
  };

  return (
    <button 
      onClick={handlePayment}
      style={{
        backgroundColor: '#0070ba', // Couleur bleue PayPal
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#005ea6'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#0070ba'}
    >
      Pay with PayPal
    </button>
  );
};

export default PaypalCheckoutButton2;
