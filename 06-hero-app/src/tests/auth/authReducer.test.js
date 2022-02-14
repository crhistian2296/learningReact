import { authReducer } from '../../auth/authReducer';
import { login, logout } from '../../types/type';

describe('Pruebas sobre AuthReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Debe de loguear al usuario', () => {
    const loginAction = {
      type: login,
      payload: {
        name: 'crhistian',
      },
    };

    const state = authReducer({ logged: false }, loginAction);

    expect(state).toStrictEqual({ logged: true, name: 'crhistian' });
  });

  test('Debe de desloguear al usuario', () => {
    const logoutAction = {
      type: logout,
    };

    const state = authReducer({ logged: true, name: 'crhistian' }, logoutAction);

    expect(state).toStrictEqual({ logged: false });
  });
});
