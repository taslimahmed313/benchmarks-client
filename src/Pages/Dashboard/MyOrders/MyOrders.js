import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const [orders, setOrders] = useState('');
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    
    axios.get(`${url}`)
    .then(response => {
        const allOrders = response.data;
        // setOrders(allOrders);
    })
    .catch(e => console.log(e))

    console.log(orders)

    
    return (
        <div>
            
        </div>
    );
};

export default MyOrders;