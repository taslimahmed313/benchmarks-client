import { useQuery } from "@tanstack/react-query";
import React from 'react';
import toast from "react-hot-toast";

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
      queryKey: ["buyers"],
      queryFn: async () => {
        try {
          const res = await fetch("http://localhost:5000/allBuyers");
          const data = res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
    });

    const handleDeleteBuyer = (buyer) => {
      fetch(`http://localhost:5000/allBuyers/${buyer._id}`, {
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
                      <button
                        onClick={() => {
                          handleDeleteBuyer(buyer);
                        }}
                        className="btn btn-xs btn-danger"
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
      </div>
    );
};

export default AllBuyers;