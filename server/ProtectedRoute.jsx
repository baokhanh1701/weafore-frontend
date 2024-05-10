import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem('username'); // replace this with actual authentication logic
  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/signin" state={{ from: location }} />;
};

export default ProtectedRoute;