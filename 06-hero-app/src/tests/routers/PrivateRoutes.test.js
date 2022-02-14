import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { PrivateRoutes } from '../../routers/PrivateRoutes';
import { PublicRoutes } from '../../routers/PublicRoutes';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual(),
//   Navigate: () => <span>Salida</span>,
// }));

describe('Pruebas en <PrivateRoutes/>', () => {
  Storage.prototype.setItem = jest.fn();

  test('Debe de mostrar el componente si el usuario esta autenticado y guardar la ultima ruta en localStorage', () => {
    const contextValue = {
      user: {
        name: 'Cristofer',
        logged: true,
      },
    };

    const mockRoute = '/';

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[mockRoute]}>
          <PrivateRoutes>
            <h1>Private component</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Private component');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', mockRoute);
  });

  test('Debe de bloquear el componente si el usuario no esta autenticado', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };

    const mockRoute = '/';

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[mockRoute]}>
          <PublicRoutes>
            <h1>Public component</h1>
          </PublicRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Public component');
  });
});
