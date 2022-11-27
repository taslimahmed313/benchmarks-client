import React from 'react';

const ExtraSection = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-5 items-center bg-gradient-to-r from-sky-100 to-indigo-100 pt-5 shadow-2xl lg:h-[500px] rounded-xl my-10 p-10">
        <div>
          <img
            className=" rounded-xl"
            src="https://assets.brightspot.abebooks.a2z.com/dims4/default/a027f2d/2147483647/strip/true/crop/1765x1324+72+0/resize/1240x930!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fec%2F5f%2F31984f1e426eb25d2640f6680d65%2Fa-bear-called-paddington2.jpg"
            alt=""
          />
        </div>
        <div className="px-5">
          <p className="text-red-500 font-medium">BOOK COLLECTING GUIDE</p>
          <h1 className="text-5xl font-serif">Guide to used book conditions</h1>
          <p className="mt-7 font-medium">
            As new, fine, very good, good, foxed, chipped, bowed, price clipped.
            Used booksellers use specialist terms and abbreviations to describe
            the condition of a used book. Our guide helps you understand the
            jargon and find the used book that's right for you.
          </p>
        </div>
      </div>
    );
};

export default ExtraSection;