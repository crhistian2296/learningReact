import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    //* Navbar cogida de getBootstrap
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          useContext
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <NavLink className='nav-item nav-link ' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-item nav-link ' to='/about'>
              About
            </NavLink>
            <NavLink className='nav-item nav-link ' to='/login'>
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
