// const user = {
//   name:'Fernando',
//   logged: true
// }

import { login, logout } from '../types/type';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case login:
      return {
        ...action.payload,
        logged: true,
      };
    case logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
