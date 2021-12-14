// Estructura de usuarion
// {
//   uid: asdfad
//   name:
// }

import { login, logout } from '../types/types';

// Es imortante dar un state inicial para evitar error en la app
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case logout:
      return {};
    default:
      return state;
  }
};
