import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
      <div className="banner p-7 lg:h-[500px]">
        <div className="text-white mx-10">
          <h1>
            {" "}
            <span className="text-6xl font-bold">Hobbit Hall</span>{" "}
            <span>Buy used books</span>
          </h1>
          <p className="text-3xl mt-3 font-serif font-semibold">
            Millions of used copies for sale
          </p>
          <p className=" text-justify my-3">
            Our immense online selection of used books covers every topic under
            the sun including all types of fiction and non-fiction, from Jack
            Kerouac's On the Road to Helene Hanff's 84, Charing Cross Road.
          </p>
        </div>
      </div>
    );
};

export default Banner;