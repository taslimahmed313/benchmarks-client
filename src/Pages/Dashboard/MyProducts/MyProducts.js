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
    const [advertiseProduct, setAdvertiseProduct] = useState(null);
    const navigate = useNavigate();

    const closeModal = () => {
      setDeletingProduct(null);
    };

    const closeAdvertiseModal = () =>{
      setAdvertiseProduct(null);
    }

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
      if (data.modifiedCount > 0) {
        swal(
          "Select for Advertise!",
          `${book.name} Advertise  Successfully!`,
          "success"
        );
        navigate("/");
      } else {
        toast((t) => (
          <span>
            Already Selected for <b className='text-[tomato]'>Advertise</b>
            <button
              className=" ml-3 font-serif font-semibold p-1 px-2 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
              onClick={() => toast.dismiss(t.id)}
            >
              Close
            </button>
          </span>
        ));
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
              className=" w-full p-4 lg:ml-5  bg-gradient-to-r rounded-lg from-sky-200 to-indigo-200 shadow-xl"
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
                    <span className=" font-serif ml-4 text-black px-2 py-1 rounded-lg bg-[#ffffff] ">
                      {product.status}
                    </span>
                    <div className="flex justify-around gap-6 mt-3">
                      <label
                        htmlFor="confirmed-modal"
                        onClick={() => setAdvertiseProduct(product)}
                        className=" font-serif font-semibold p-1 px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
                      >
                        Advertise
                      </label>

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
        <div>
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
        <div>
          {advertiseProduct && (
            <ConfirmModal
              title={"Are You Sure Advertise This Product?"}
              message={`Just Go Advertising for "${advertiseProduct.name}".`}
              successAction={handleProductAdvertise}
              successButtonName="Advertise"
              modalData={advertiseProduct}
              closeModal={closeAdvertiseModal}
            ></ConfirmModal>
          )}
        </div>
      </div>
    );
};

export default MyProducts;