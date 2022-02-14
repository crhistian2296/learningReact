// Navbar tomado de la documentacion de Bootstrap
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { logout } from '../../types/type';

export const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: logout,
    });
    navigate('/login', { replace: true });
  };

  const { user } = useContext(AuthContext);

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Asociaciones
        </Link>

        <div className='navbar-collapse justify-content-sm-between '>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/marvel'>
              Marvel
            </NavLink>
            <NavLink className='nav-item nav-link' to='/dc'>
              DC
            </NavLink>
            <NavLink className='nav-item nav-link' to='/search'>
              Search
            </NavLink>
          </div>
          <div className='navbar-nav'>
            <span className='nav-item nav-link text-info'>{user.name}</span>
            <button className='nav-item nav-link btn logoutLink' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
