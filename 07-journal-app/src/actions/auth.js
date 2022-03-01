import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  // *redux-thunk provee automaticamente ese dispatch para acciones asincronas
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'crhistian'));
    }, 3000);
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch(console.log);
  };
};

export const logout = () => ({ type: types.logout });
