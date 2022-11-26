import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

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
    verify,
  } = book;

  return (
    <div>
      <div className="card card-compact w-full bg-gradient-to-r from-sky-100 to-indigo-200 pt-5 shadow-2xl">
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
            <div className="flex items-center">
              <span className="mr-2">{sellerName}</span>{" "}
              <div>
                {verify && (
                  <span className="flex items-center">
                    <FaCheckCircle className=" text-[#54ACC8]"></FaCheckCircle>
                    <div className="ml-1 text-xs text-[#54ACC8] font-semibold">
                      {" "}
                      Verified Seller
                    </div>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="card-actions items-center">
            <label
              htmlFor="booking-modal"
              onClick={() => setBookingData(book)}
              className="btn text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
            >
              Book Now
            </label>
            <p className="text-end text-accent font-serif">
              {postedTime.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;