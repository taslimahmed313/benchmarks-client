import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from "react-spinners";
import { AuthContext } from '../../Contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    if (loading || isBuyerLoading) {
      return <DotLoader color="#36d7b7"></DotLoader>;
    }
    if (user && isBuyer) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRouter;