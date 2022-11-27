import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
      <div className="banner p-7 lg:h-[500px]">
        <div className="text-white mx-10">
          <h1>
            {" "}
            <span className="text-6xl font-semibold">BENCHMARKS</span>{" "}
            <span>Buy used books</span>
          </h1>
          <p className="text-3xl mt-3 font-serif font-semibold">
            Millions of used copies for sale
          </p>
          <p className=" text-justify my-3">
            Used books We've been selling cheap used books since 1996. Discover
            gently used books for sale from sellers around the world. By
            shopping for used items, you can save money, be sustainable, support
            independent booksellers, and find great books to read. AbeBooks
            offers novels, memoirs and autobiographies, cookbooks, poetry,
            children's picture-books, textbooks, car manuals, hard-to-find
            out-of-print editions, and millions of cheap paperbacks.
          </p>
        </div>
      </div>
    );
};

export default Banner;