import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const ProductCategories = () => {

    const {data: categories = [], isLoading} = useQuery({
      queryKey: ["categories"],
      queryFn: async()=>{
        try {
          const res = await fetch("http://localhost:5000/categories");
          const data = res.json()
          return data;
        } catch (error) {
          console.log(error)
        }
      }
    })

    if(isLoading){
      return (
        <div className='flex justify-center h-32 items-center'>
          <DotLoader  color="#36d7b7" />
        </div>
      );
    }
    

    return (
      <div>
        <h1 className="text-3xl font-semibold mt-10">Book's Categories</h1>
          <div className="grid lg:grid-cols-3 lg:gap-8 mt-2 mb-7">
            {categories.map((category) => (
              <Link
                key={category._id}
                to={`/category/${category.name}`}
                className=" p-5 my-4  bg-gradient-to-r from-sky-200 to-indigo-200 hover:from-pink-500 hover:to-yellow-500 hover:text-white   shadow-2xl rounded-lg text-center"
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