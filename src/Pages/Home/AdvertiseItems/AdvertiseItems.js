import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';

const AdvertiseItems = () => {
    const {data: advertises = []} = useQuery({
        queryKey: ["advertises"] ,
        queryFn: async() =>{
           try {
             const res = await fetch("http://localhost:5000/advertises");
             const data = res.json();
             return data;
           } catch (error) {
            console.log(error)
           }
        }
    })
console.log(advertises)
 
    return (
      <div>
        {advertises.length > 0 && <h1>Advertise Products</h1>}
        <div>
          {advertises.length > 0 &&
            advertises.map((item) => (
              <AdvertiseCard key={item._id}></AdvertiseCard>
            ))}
        </div>
      </div>
    );
};

export default AdvertiseItems;