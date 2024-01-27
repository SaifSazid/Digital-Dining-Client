import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
//provide publishablekey
const stripePromise = loadStripe('pk_test_51OblqyKFAg43c9BKLiGFsqyqWD1iXKlqsiddNtS0cnI5PKkvkiEICQiaWGjGduYCSajBOB4vABf2wNitqslMYWeY00hXxv3qaa');
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
      <div className='w-full'>
        <SectionTitle
          subHeading="please process"
          heading="Payment"
        ></SectionTitle>
   
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart}></CheckoutForm>
        </Elements>
      </div>
    );
  };
  
  export default Payment;