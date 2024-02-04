import {
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/provider';
import { checkingCredentials, login, logout } from './authSlice';

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

    if (!result.ok) return dispatch(logout(result));
    return dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log('Checking with email and password');

    const resp = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    console.log(resp);
    if (!resp.ok) return dispatch(logout(resp));
    return dispatch(login(resp));
  };
};
