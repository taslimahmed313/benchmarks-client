import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import BookingModal from '../BookingModal/BookingModal';

const CategoryBooks = () => {
    const books = useLoaderData();

    return (
      <div>
        <div className="grid lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
          <BookingModal></BookingModal>
        </div>
      </div>
    );
};

export default CategoryBooks;