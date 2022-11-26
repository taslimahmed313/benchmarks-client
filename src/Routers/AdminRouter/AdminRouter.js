import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const AdminRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
      return <DotLoader color="#36d7b7"></DotLoader>;
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;