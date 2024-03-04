import {
  registerUserWithEmailPassword,
  signInUserWithEmailAndPassword,
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

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));
    return dispatch(login({ displayName, uid, email, photoURL }));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log({ email, password });

    const { ok, uid, photoURL, errorMessage, displayName } =
      await signInUserWithEmailAndPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));
    return dispatch(login({ displayName, uid, email, photoURL }));
  };
};
