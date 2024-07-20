import React, { useEffect, useRef } from 'react';

const PayPalButton = () => {
  const paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AZ0xv217NzyDyy3OmjQBhnew5oxN2JVXeCn9HjyPf54sydnCtRaD0YQ5_qFVkdZ7DWm8emTAtll_3-OJ`;
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '1.00' // Amount to charge
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render(paypalRef.current);
      }
    });
    document.body.appendChild(script);
  }, []);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;
