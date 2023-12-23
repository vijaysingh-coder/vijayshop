import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />; // replace replaces the current history state with the new one. It is used to replace the current history state with the new one. It is used to replace the current history state with the new one. It is used to replace the current history state
};

export default PrivateRoute;
