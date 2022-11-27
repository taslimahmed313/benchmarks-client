import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import BookingModal from '../BookingModal/BookingModal';

const CategoryBooks = () => {
    const books = useLoaderData();
    const [bookingData, setBookingData] = useState(null);
    
    return (
      <div>
        <div className="grid lg:grid-cols-3 gap-8 my-10">
          {books.map((book) => (
            <>
              <BookCard
                key={book._id}
                setBookingData={setBookingData}
                book={book}
              ></BookCard>
            </>
          ))}
          {bookingData && (
            <BookingModal
              bookingData={bookingData}
              setBookingData={setBookingData}
            ></BookingModal>
          )}
        </div>
      </div>
    );
};

export default CategoryBooks;