import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    return (
      <div>
        <h3 className="text-3xl text-center my-3 font-serif font-medium">Payment of "{booking.bookName}" Book</h3>
      </div>
    );
};

export default Payment;