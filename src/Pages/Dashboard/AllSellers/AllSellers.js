import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

  const {data: sellers = [], refetch} = useQuery({
    queryKey: ["sellers"],
    queryFn: async()=>{
      try {
          const res = await fetch("http://localhost:5000/allSellers");        
          const data = res.json()
          return data;
      } catch (error) {
        console.log(error)
      }
    }
  })

  const handleDeleteSeller=(seller)=>{
    fetch(`http://localhost:5000/allSellers/${seller._id}`, {
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

  const handleVerifySeller = email =>{
    fetch(`http://localhost:5000/verifySeller/${email}`, {
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
                    <button
                      onClick={() => {
                        handleVerifySeller(seller.email);
                      }}
                      className=" text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                      Verify
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDeleteSeller(seller);
                      }}
                      className=" text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSellers;