import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';

const CategoryBooks = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            {
                books.map(book => <BookCard key={book._id}></BookCard>)
            }
        </div>
    );
};

export default CategoryBooks;