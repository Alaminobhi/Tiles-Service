import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardPayment = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentErr, setPaymentErr] = useState(null);

  const [paymentSuccess, setPaymentSuccess] = useState(null)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentErr(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod);
      setPaymentErr(null);
      handlePayment(paymentMethod);
    }
  };

  return (
    <div className="text-center">
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className="btn btn-success mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentErr && <p style={{color: 'red'}}>{paymentErr}</p>
        }
        {
            paymentSuccess && <p style={{color: 'green'}}>Your Payment was Successful</p>
        }
    </div>
  );
};
export default SimpleCardPayment;