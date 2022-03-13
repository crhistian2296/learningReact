import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { uiFinishLoading, uiStartLoading } from './ui';

// export const startLoginEmailPassword = (email, password) => {
//   // *redux-thunk provee automaticamente ese dispatch para acciones asincronas
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(login(123, 'crhistian'));
//     }, 3000);
//   };
// };

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
/**
 * Crea una cuenta en la app de autenticacion en firebase mediante correo
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @returns void
 */
export const startRegisterWithEmailAsync = (email, password, name) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(uiFinishLoading()));
  };
};
export const startLoginWithEmailAsync = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(uiFinishLoading()));
  };
};

/**
 * Crean una cuenta en la app de autenticacion de firebase mediante boton de google
 * @returns void
 */
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch(console.log);
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    await dispatch(logout());
  };
};

export const logout = () => ({ type: types.logout });
