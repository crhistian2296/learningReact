import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { describe, expect, test } from 'vitest';
import Login from '../../../src/auth/pages/LoginScreen';
import { store } from '../../../src/store';

describe('Pruebas en LoginScreen', () => {
  test('Debe de mostrar correctamente LoginScreen', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });
});
