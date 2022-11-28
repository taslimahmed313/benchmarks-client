import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div>
          <h1 className='lg:text-8xl text-6xl text-center font-bold'>Ooops !</h1>
          {/* <p>404 Page Not Found</p> */}
          <img
            src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=338&ext=jpg&ga=GA1.2.939492190.1661093851&semt=sph"
            alt=""
          />
              <Link className='hover:underline text-indigo-600  mt-5 inline-block font-serif font-semibold' to="/">GO TO HOMEPAGE</Link>
        </div>
      </div>
    );
};

export default ErrorPage;