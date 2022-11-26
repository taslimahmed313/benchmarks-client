import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';

const AdvertiseItems = () => {
    const {data: advertises = []} = useQuery({
        queryKey: ["advertises"] ,
        queryFn: async() =>{
           try {
             const res = await fetch(
               "http://localhost:5000/advertises"
             );
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
        {advertises.length > 0 && <h1 className='text-3xl my-3 font-serif font-semibold'>Advertise Books</h1>}
        <div className=' grid lg:grid-cols-3 lg:gap-6'>
          {advertises.length > 0 &&
            advertises.map((item) => (
              <AdvertiseCard key={item._id} item={item}></AdvertiseCard>
            ))}
        </div>
      </div>
    );
};

export default AdvertiseItems;