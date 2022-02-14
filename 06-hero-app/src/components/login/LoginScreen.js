import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { login } from '../../types/type';

const LoginScreen = () => {
  // react-router hook
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const loginAction = {
    type: login,
    payload: {
      name: 'crhistian2296',
    },
  };

  const handleLogin = () => {
    dispatch(loginAction);

    const lastPath = localStorage.getItem('lastPath') ?? '/';

    navigate(lastPath, { replace: true });
  };

  return (
    <div className='m-5'>
      <h1>LoginScreen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
