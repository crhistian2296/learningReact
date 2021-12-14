import { login } from '../types/types';

export const loginAction = (uid, displayName) => ({
  type: login,
  payload: {
    uid,
    displayName
  }
})
