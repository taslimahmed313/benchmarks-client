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


    return (
      <div>
        <h1 className='text-3xl font-serif font-semibold text-center my-4'>All Sellers Data Here</h1>
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
              {sellers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    <button onClick={()=>{handleDeleteSeller(seller)}} className="btn btn-xs btn-danger">Delete</button>
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