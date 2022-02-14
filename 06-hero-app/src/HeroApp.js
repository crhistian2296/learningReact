import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './routers/AppRouter';

function HeroApp() {
  const initialState = () => JSON.parse(localStorage.getItem('user')) ?? { logged: false };

  const [user, dispatch] = useReducer(authReducer, {}, initialState);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <div className='HeroApp'>
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default HeroApp;
