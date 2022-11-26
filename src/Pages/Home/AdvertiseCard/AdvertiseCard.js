import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({item}) => {
    return (
      <div>
        <div className=" w-full p-4  bg-gradient-to-r rounded-lg from-sky-300 to-indigo-300 shadow-xl">
          <div className="w-full">
            <img
              className=" h-[130px] w-full object-cover rounded-lg"
              src={item.img}
              alt=""
            />
          </div>
          <div className="mt-3">
            <p className="font-lg text-lg font-serif">{item.name}</p>
            <p className=" font-semibold font-serif">{item.location}</p>
            <span className="font-bold font-serif text-lg">
              ${item.resalePrice}
            </span>
            <span className="text-[#525151] font-serif line-through text-[18px] ml-2">
              ${item.originalPrice}
            </span>{" "}
            <span className=" font-serif ml-4 text-black px-2 py-1 rounded-lg bg-[#e6e2e2] ">
              {item.status}
            </span>
            <div className="flex justify-around gap-6 mt-3">
              <Link
                to={`/category/${item.category_name}`}
                // htmlFor="confirmed-modal"
                className=" font-serif p-1 font-semibold px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdvertiseCard;