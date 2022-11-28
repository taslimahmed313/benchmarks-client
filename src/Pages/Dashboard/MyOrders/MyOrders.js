import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    
   useEffect(()=>{
     axios
       .get(`${url}`)
       .then((response) => {
         const allOrders = response.data;
         setOrders(allOrders);
       })
       .catch((e) => console.log(e));
   },[url])

    
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-xl">
                        <img src={order.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h1 className=" font-serif font-medium">
                        {order.bookName}
                      </h1>
                    </div>
                  </td>
                  <td>
                    <p className="text-xs">{order.price}</p>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/buyer/payment/${order._id}`}
                      className="btn text-white font-serif capitalize border-0 btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                      Pay
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;