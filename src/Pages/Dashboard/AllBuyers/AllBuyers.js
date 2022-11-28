import { useQuery } from "@tanstack/react-query";
import React, { useState } from 'react';
import toast from "react-hot-toast";
import ConfirmModal from "../../Shared/ConfirmModal/ConfirmModal";

const AllBuyers = () => {
  const [deleteBuyer, setDeleteBuyer] = useState(null);

  const closeModal = () =>{
    setDeleteBuyer(null);
  }


    const { data: buyers = [], refetch } = useQuery({
      queryKey: ["buyers"],
      queryFn: async () => {
        try {
          const res = await fetch("https://assginment-project-server-taslimahmed313.vercel.app/allBuyers");
          const data = res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
    });

    const handleDeleteBuyer = (buyer) => {
      fetch(`https://assginment-project-server-taslimahmed313.vercel.app/allBuyers/${buyer._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success(`Buyer ${buyer.name} Deleted Successfully`);
          }
        });
    };
    return (
      <div>
        <div>
          <h1 className="text-3xl font-serif font-semibold text-center my-3">
            All buyers Data Here
          </h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {buyers.map((buyer, i) => (
                  <tr key={buyer._id}>
                    <th>{i + 1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>
                      <label
                        htmlFor="confirmed-modal"
                        onClick={() => {
                          setDeleteBuyer(buyer);
                        }}
                        className="font-serif p-1 font-semibold px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {deleteBuyer && (
            <ConfirmModal
              title={"Are You Sure Delete This Buyer?"}
              message={`If you delete "${deleteBuyer.name}" It cannot be Undo.`}
              successAction={handleDeleteBuyer}
              successButtonName="Delete"
              modalData={deleteBuyer}
              closeModal={closeModal}
            ></ConfirmModal>
          )}
        </div>
      </div>
    );
};

export default AllBuyers;