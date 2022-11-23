import React from 'react';

const BookCard = ({book}) => {
    const {
      name,
      img,
      location,
      originalPrice,
      postedTime,
      resalePrice,
      sellerName,
      usingTime,
    } = book;

    return (
      <div className="">
        <div className="card card-compact w-full bg-base-100 pt-3 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" className="rounded-xl w-4/6 h-[220px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-serif font-semibold">{name}</h2>
            <div className=' font-serif font-medium'>
              <p>{location}</p>
              <span className="font-bold text-lg">${resalePrice}</span>
              <span className="text-[gray] line-through text-[16px] ml-2">
                ${originalPrice}
              </span>
              <p>Used: {usingTime}</p>
              <p>Seller: {sellerName}</p>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm">Book Now</button>
              <p className='text-end text-accent font-serif'>{postedTime} ago</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookCard;