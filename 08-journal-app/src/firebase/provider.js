import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    const { code: errorCode, message: errorMessage } = error;
    return { ok: false, errorCode, errorMessage };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log('creating user...');

    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    console.log(resp, 'respuesta');
    return { ok: true, email, displayName };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};
