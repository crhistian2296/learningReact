import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas en <Dashboard/>', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Crhistian',
    },
  };

  test('Debe de renderizar correctamente <DCScreen/>', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Crhistian');
    expect(wrapper.find('h1').text().trim()).toBe('DC Screen');
  });

  test('Debe de renderizar correctamente <SearchScreen/>', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Crhistian');
    expect(wrapper.find('h3').at(0).text().trim()).toBe('Search');
  });
});
