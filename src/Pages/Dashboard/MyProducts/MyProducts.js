import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: products = []} = useQuery({
        queryKey: ["products"],
        queryFn: async()=>{
            try {
                const res = await fetch(
                  `http://localhost:5000/books?email=${user?.email}`
                );
                const data = res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })
console.log(products);
    return (
      <div>
        <h1 className='text-2xl font-serif text-center font-semibold'>See Your All Products Here</h1>
        <div className=" grid lg:grid-cols-2 lg:gap-8 lg:mx-10">
          {products.map((product) => (
            <div
              key={product._id}
              className=" w-full p-4 my-5 lg:ml-5  bg-gradient-to-r rounded-lg from-sky-300 to-indigo-300 shadow-xl"
            >
              <div className="">
                <div className="">
                  <div className="w-full">
                    <img
                      className=" h-[130px] w-full object-cover rounded-lg"
                      src={product.img}
                      alt=""
                    />
                  </div>
                  <div className="mt-3">
                    <p>{product.name}</p>
                    <p className=' font-semibold font-serif'>Location: {product.location}</p>
                    <span className="font-bold font-serif text-lg">
                      ${product.resalePrice}
                    </span>
                    <span className="text-[#525151] font-serif line-through text-[18px] ml-2">
                      ${product.originalPrice}
                    </span>{" "}
                    <button className=" font-serif ml-4 text-black px-2 rounded-lg bg-[#e6e2e2] ">
                      {product.status}
                    </button>

                    <div className="flex justify-around gap-6 mt-3">
                      <button className=" font-serif p-1 px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ">
                        Unsold
                      </button>
                      <button className=" font-serif p-1 px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyProducts;