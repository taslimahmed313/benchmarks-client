import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
      <div className="banner p-7 lg:h-[550px] w-full grid lg:grid-cols-2 lg:gap-3 gap-7 items-center   flex-col-reverse">
        <div className="text-white">
          <p className="text-3xl mt-3 font-serif font-semibold">
            Buy used books at the lowest prices. Millions of used copies for
            sale.
          </p>
          <p className=" text-justify my-5 font-medium">
            Used books We've been selling cheap used books since 1996. By
            shopping for used items, you can save money, be sustainable.
          </p>
          <button className="font-serif  w-44 p-1 font-semibold px-6 text-white rounded-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            GET STARTED
          </button>
        </div>
        <div>
          <img
            className="lg:w-[300px] w-full lg:mx-auto rounded-2xl border-8"
            src="https://2084futurosimaginados.org/_wp/wp-content/uploads/2021/09/dune-en-15ba251059578295f851d78e1c3a-s.jpg"
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;