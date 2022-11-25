import React from 'react';

const BookCard = ({ book, setBookingData }) => {
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
    <div>
      <div className="card card-compact w-full bg-gradient-to-r from-sky-300 to-indigo-300 pt-5 shadow-2xl">
        <figure>
          <img src={img} alt="Shoes" className="rounded-xl w-4/6 h-[220px]" />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-serif font-semibold">{name}</h2>
          <div className=" font-serif font-medium">
            <p>{location}</p>
            <span className="font-bold text-lg">${resalePrice}</span>
            <span className="text-[#525151] line-through text-[18px] ml-2">
              ${originalPrice}
            </span>
            <p>Used: {usingTime}</p>
            <p>Seller: {sellerName}</p>
          </div>
          <div className="card-actions items-center">
            {/* <button className="btn btn-primary btn-sm">Book Now</button> */}
            <label
              htmlFor="booking-modal"
              onClick={() => setBookingData(book)}
              className="btn text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
            >
              Book Now
            </label>
            <p className="text-end text-accent font-serif">{postedTime.slice(0,10)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;