import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const ReportedItems = () => {
  const [deleteReportedItem, setDeleteReportedItem] = useState(null);

  const closeReportedModal = () =>{
    setDeleteReportedItem(null);
  }

    const {data: reports = [], refetch} = useQuery({
        queryKey: ["reports"],
        queryFn: async() =>{
            const res = await fetch("https://assginment-project-server-taslimahmed313.vercel.app/reports");
            const data = res.json();
            return data;
        }
    })

    const handleReportedProductDelete = reported =>{
      fetch(`https://assginment-project-server-taslimahmed313.vercel.app/reports/${reported._id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          toast.success(`Reported Book Remove From The BookList`);
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
                    <label
                      htmlFor="confirmed-modal"
                      onClick={() => setDeleteReportedItem(report)}
                      className="btn text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
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
          {deleteReportedItem && (
            <ConfirmModal
              title={"Are You Sure Deleting Reported Product?"}
              message={`If you delete It cannot be Undo.`}
              successAction={handleReportedProductDelete}
              successButtonName="Delete"
              modalData={deleteReportedItem}
              closeModal={closeReportedModal}
            ></ConfirmModal>
          )}
        </div>
      </div>
    );
};

export default ReportedItems;