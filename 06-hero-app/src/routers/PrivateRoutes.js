import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { pathname, search } = useLocation();
  const lastUrl = pathname + search;

  localStorage.setItem('lastPath', lastUrl);

  return user.logged ? children : <Navigate to='/login' />;

  // * React router v6
  // return user.logged ? <Outlet/> : <Navigate to='/login' />
};
