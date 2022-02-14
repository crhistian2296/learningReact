import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { login } from '../../../types/type';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <LoginScreen/>', () => {
  const contextValue = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <LoginScreen />
        {/* <Routes>
          <Route path='/login' element={<LoginScreen />}></Route>
        </Routes> */}
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Debe de hacer Match cons la snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de realizar el dispatch y la navegacion', () => {
    const { dispatch } = contextValue;

    const loginAction = {
      type: login,
      payload: {
        name: 'crhistian2296',
      },
    };

    wrapper.find('button').simulate('click');

    expect(dispatch).toHaveBeenCalledWith(loginAction);
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });

    localStorage.setItem('lastPath', '/dc');
    wrapper.find('button').simulate('click');

    expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
  });
});
