import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddAProduct = () => {
    const {
      register,
      handleSubmit,
    } = useForm();
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgBb_key;

    const {data: verified = {}} = useQuery({
      queryKey: ["verified"],
      queryFn: async() =>{
       try {
        const res = await fetch(
          `http://localhost:5000/verifySeller/${user?.email}`
        );
        const data = res.json();
        return data;
       } catch (error) {
        console.log(error);
       }
      }
    })

    console.log(verified);

    const handleAddToProduct = (data) =>{
        // console.log(data)

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const addProduct = {
                  name: data.name,
                  img: imgData.data.url,
                  location: data.location,
                  resalePrice: data.resalePrice,
                  originalPrice: data.originalPrice,
                  usingTime: data.usingTime,
                  sellerName: user?.displayName,
                  postedTime: new Date(),
                  category_name: data.category_name,
                  productCondition: data.productCondition,
                  description: data.description,
                  purchaseTime: data.purchase,
                  phone: data.phone,
                  email: user?.email,
                  status: "available",
                  verify: verified.isVerify,
                };
                fetch("http://localhost:5000/books", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                  body: JSON.stringify(addProduct),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate("/dashboard/seller/myProducts");
                  });

            }})
    }
    
    return (
      <div className="h-[950px] w-full flex  mb-10 mt-5">
        <div className="w-96 p-7 rounded-lg shadow-2xl bg-gradient-to-r from-sky-300 to-indigo-300">
          <h2 className="text-2xl text-center font-serif text-black font-semibold">
            Add A Product
          </h2>
          <form onSubmit={handleSubmit(handleAddToProduct)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold mt-1">
                  Resale Price
                </span>
              </label>
              <input
                type="text"
                {...register("resalePrice")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold mt-1">
                  Original Price
                </span>
              </label>
              <input
                type="text"
                {...register("originalPrice")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold mt-1">
                  Select Product Condition Type
                </span>
              </label>
              <select
                className="select select-bordered select-sm w-full max-w-xs"
                {...register("productCondition")}
                required
              >
                <option selected>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold mt-1">
                  Phone Number
                </span>
              </label>
              <input
                type="text"
                {...register("phone")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold mt-1">
                  Location
                </span>
              </label>
              <input
                type="text"
                {...register("location")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div>
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                  Select Your Category
                </span>
              </label>
              <select
                className="select select-bordered select-sm w-full max-w-xs"
                {...register("category_name")}
                required
              >
                <option selected>Islamic</option>
                <option>Biography</option>
                <option>Engineering</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold mt-1">
                  Year Of Purchase
                </span>
              </label>
              <input
                type="text"
                {...register("purchase")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className=" font-serif font-semibold mt-1">
                  <span className="label-text">Duration of use</span>{" "}
                  <span className="text-[12px]">(yrs/month/week)</span>
                </span>
              </label>
              <input
                type="text"
                {...register("usingTime")}
                className="input input-bordered w-full input-sm max-w-xs"
                required
              />
            </div>

            <div>
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                  Upload Your Product Image
                </span>
              </label>
              <input
                type="file"
                {...register("img")}
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                  Description
                </span>
              </label>
              <textarea
                type="text"
                {...register("description")}
                className="input input-bordered w-full max-w-xs"
                required
              ></textarea>
            </div>
            <input
              className="btn w-full capitalize font-serif text-lg text-white font-semibold border-none mt-4 mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
              value="Add Product"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
};

export default AddAProduct;