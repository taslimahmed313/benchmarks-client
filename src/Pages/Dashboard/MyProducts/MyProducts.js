import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    // const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const closeModal = () => {
      setDeletingProduct(null);
    };

    const { data: products = [], refetch } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/books?email=${user?.email}`
          );
          const data = res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
    });


const handleProductDelete = (book) => {
  fetch(`http://localhost:5000/books/${book._id}`, {
    method: "DELETE"
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount > 0) {
        refetch();
        toast.success(`Remove "${book.name}" successfully`);
      }
    });
};

const handleProductAdvertise = (book) =>{
  fetch(`http://localhost:5000/advertise/${book._id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        swal(
          "Confirmed Booked!",
          `${book.name} Booking  Successfully!`,
          "success"
        );
        //  setIsDisabled(true)
        navigate("/");
      }
    });
  
}

    return (
      <div>
        <h1 className="text-2xl mb-4 font-serif text-center font-semibold">
          See Your All Products Here
        </h1>
        <div className=" grid lg:grid-cols-2 lg:gap-8 lg:mx-10">
          {products.map((product) => (
            <div
              key={product._id}
              className=" w-full p-4 lg:ml-5  bg-gradient-to-r rounded-lg from-sky-300 to-indigo-300 shadow-xl"
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
                    <p className="font-lg text-lg font-serif">{product.name}</p>
                    <p className=" font-semibold font-serif">
                      {product.location}
                    </p>
                    <span className="font-bold font-serif text-lg">
                      ${product.resalePrice}
                    </span>
                    <span className="text-[#525151] font-serif line-through text-[18px] ml-2">
                      ${product.originalPrice}
                    </span>{" "}
                    <span className=" font-serif ml-4 text-black px-2 py-1 rounded-lg bg-[#e6e2e2] ">
                      {product.status}
                    </span>
                    <div className="flex justify-around gap-6 mt-3">
                      <button
                        onClick={() => handleProductAdvertise(product)}
                        // disabled={isDisabled}
                        className=" font-serif font-semibold p-1 px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
                        // style = {isDisabled ? styles.button : styles.buttonDisabled}
                      >
                       Advertise
                      </button>
                      
                      <label
                        onClick={() => setDeletingProduct(product)}
                        htmlFor="confirmed-modal"
                        className=" font-serif p-1 font-semibold px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
                      >
                        Delete
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {deletingProduct && (
          <ConfirmModal
            title={"Are You Sure Deleting This Product?"}
            message={`If you delete "${deletingProduct.name}" It cannot be Undo.`}
            successAction={handleProductDelete}
            successButtonName="Delete"
            modalData={deletingProduct}
            closeModal={closeModal}
          ></ConfirmModal>
        )}
      </div>
    );
};

export default MyProducts;