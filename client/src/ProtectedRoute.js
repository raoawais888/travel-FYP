import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the token exists in localStorage
  const role = !!localStorage.getItem('user'); 

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return  navigate("/login")

  }

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
