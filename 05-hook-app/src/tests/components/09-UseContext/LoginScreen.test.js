import { mount } from 'enzyme';
import LoginScreen from '../../../09-UseContext/LoginScreen';
import { UserContext } from '../../../09-UseContext/UserContext';

describe('Pruebas en <LoginScreen/>', () => {
  const user = {
    name: 'Paco',
    email: 'paco23@gmail.com',
  };

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );
  test('Debe de renderizar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejecutar setUser con el argumento especificado', () => {
    // wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({ id: 1212, name: 'Paco' });
  });
});
