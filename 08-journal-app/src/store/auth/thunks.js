import { signInWithGoogle } from '../../firebase/provider';
import { checkingCredentials, login } from './authSlice';

export const checkingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log('Checking credentials');
  };
};

export const startGoogleSignIn = token => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log('Checking Google sign in');
    const result = await signInWithGoogle();
    if (result.ok) dispatch(login());
  };
};
