import { describe, expect, test } from 'vitest';
import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authFixtures';

describe('Pruebas en el authSlice', () => {
  test('Debe de retornar el estado inicial del usuario y el reducer debe llamarse "auth"', () => {
    const state = authSlice.reducer(initialState, {});
    expect(authSlice.name).toBe('auth');
    expect(state).toEqual(initialState);
  });
});
