// utils/auth.js
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    return token && user ? user : null;
  };
  
  export const hasRole = (user, allowedRoles) => {
    return user && allowedRoles.includes(user.role);
  };
  