import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas sobre <AppRouter/>', () => {
  test('Debe de mostrar <LoginScreen/> si el usuario no esta logueado', () => {
    const contextValue = { user: { logged: false } };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');
  });

  test('Debe de mostrar <MarvelScreen/> si el usuario esta logueado', () => {
    const contextValue = { user: { logged: true, name: 'Crhistian' } };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
    expect(wrapper.find('.text-info').text().trim()).toBe('Crhistian');
  });
});
