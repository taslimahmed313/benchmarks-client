import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const AllSellers = () => {
  const [deleteSeller, setDeleteSeller] = useState(null);
  const [verifySeller, setVerifySeller] = useState(null);

  const closeModal = () =>{
    setDeleteSeller(null);
  }

  const closeVerifyModal = () =>{
    setVerifySeller(null);
  }

  const {data: sellers = [], refetch} = useQuery({
    queryKey: ["sellers"],
    queryFn: async()=>{
      try {
          const res = await fetch("https://assginment-project-server-taslimahmed313.vercel.app/allSellers");        
          const data = res.json()
          return data;
      } catch (error) {
        console.log(error)
      }
    }
  })

  const handleDeleteSeller=(seller)=>{
    fetch(`https://assginment-project-server-taslimahmed313.vercel.app/allSellers/${seller._id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        refetch();
        toast.success(`Seller ${seller.name} Deleted Successfully`)
      }
    })
  }

  const handleVerifySeller = seller =>{
    fetch(`https://assginment-project-server-taslimahmed313.vercel.app/verifySeller/${seller.email}`, {
      method: "PUT",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        toast.success("Successfully Add As a Verified Seller")
      }
    })
  }


    return (
      <div>
        <h1 className="text-3xl font-serif font-semibold text-center my-4">
          All Sellers Data Here
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Verify</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    {seller?.verification !== "verified" && (
                      <label
                        htmlFor="confirmed-modal"
                        onClick={() => {
                          setVerifySeller(seller);
                        }}
                        className="font-serif p-1 font-semibold px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
                      >
                        Verify
                      </label>
                    )}
                  </td>
                  <td>
                    <label
                      htmlFor="confirmed-modal"
                      onClick={() => {
                        setDeleteSeller(seller);
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
        <div>
          {deleteSeller && (
            <ConfirmModal
              title={"Are You Sure Deleting This Seller?"}
              message={`If you delete Seller"${deleteSeller.name}" It cannot be Undo.`}
              successAction={handleDeleteSeller}
              successButtonName="Delete"
              modalData={deleteSeller}
              closeModal={closeModal}
            ></ConfirmModal>
          )}
        </div>
        <div>
          {verifySeller && (
            <ConfirmModal
              title={"Are You Sure Verify This Seller?"}
              message={`If you Once Verify Seller "${verifySeller.name}" It cannot be Undo.`}
              successAction={handleVerifySeller}
              successButtonName="Verify"
              modalData={verifySeller}
              closeModal={closeVerifyModal}
            ></ConfirmModal>
          )}
        </div>
      </div>
    );
};

export default AllSellers;