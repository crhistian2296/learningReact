import { beforeEach, describe, expect, test, vitest } from 'vitest';
import {
  checkingAuthentication,
  startGoogleSignIn,
} from '../../../src/store/auth/thunks';
import {
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice';
import { demoUser } from '../../fixtures/authFixtures';
import { signInWithGoogle } from '../../../src/firebase/provider';

vitest.mock('../../../src/firebase/provider.js');

describe('Pruebas en los thunks', () => {
  const dispatch = vitest.fn();

  beforeEach(() => vitest.clearAllMocks());
  test('Debe de llamar a la accion checkingCredentials', async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('Debe de llamar a checkingCredentials y login - exito', async () => {
    const loginData = { ok: true, ...demoUser };

    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('Debe de llamar a checkingCredentials y logout - error', async () => {
    const logoutData = { ok: false, errorMesagge: 'Error de google' };

    await signInWithGoogle.mockResolvedValue(logoutData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(logoutData));
  });
});
