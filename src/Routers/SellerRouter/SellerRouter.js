import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from "react-spinners";
import { AuthContext } from '../../Contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if(loading || isSellerLoading){
        return <DotLoader className='m-auto' color="#36d7b7"></DotLoader>;
    }
    if(user && isSeller){
        return children;
    }
     return (
       <Navigate to="/login" state={{ from: location }} replace></Navigate>
     );
};

export default SellerRouter;