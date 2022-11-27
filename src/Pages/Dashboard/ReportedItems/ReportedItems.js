import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {

    const {data: reports = [], refetch} = useQuery({
        queryKey: ["reports"],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/reports");
            const data = res.json();
            return data;
        }
    })

    const handleReportedProductDelete = reported =>{
      fetch(`http://localhost:5000/reports/${reported._id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          toast.success(`Reported Book ${reported.name} Remove From The BookList`);
          refetch();
        }
      })
    }

    return (
      <div>
        <h1 className="text-3xl font-serif font-semibold text-center my-4">
          All Reported Items Here
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, i) => (
                <tr key={report._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={report.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h1>{report.name}</h1>
                      <p>{report.category_name}</p>
                      <p>${report.resalePrice}</p>
                    </div>
                  </td>

                  <td>
                    <button
                      onClick={() => handleReportedProductDelete(report)}
                      className="btn text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
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

export default ReportedItems;