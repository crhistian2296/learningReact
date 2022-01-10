import { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => {
          setUser({ id: 1212, name: 'Paco' });
        }}
      >
        Login
      </button>
      <button
        className='btn btn-primary mx-2'
        onClick={() => {
          setUser({});
        }}
      >
        Logut
      </button>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default LoginScreen;
