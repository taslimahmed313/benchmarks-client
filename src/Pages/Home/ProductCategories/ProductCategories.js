import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    console.log(categories)

    return (
      <div>
        <h1 className="text-3xl font-semibold mt-10">Book's Categories</h1>
        <div className="grid lg:grid-cols-3 lg:gap-8 my-7">
          {categories.map((category) => (
            <Link
              to={`/category/${category.category_id}`}
              className=" p-5 bg-gradient-to-r from-sky-200 to-indigo-200 shadow-2xl rounded-lg text-center"
              key={category._id}
            >
              <img className="w-1/2 m-auto" src={category.image} alt="" />
              <h1 className="text-2xl font-serif font-semibold">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    );
};

export default ProductCategories;