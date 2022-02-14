import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../../auth/AuthContext';
import { Navbar } from '../../../../components/UI/Navbar';
import { logout } from '../../../../types/type';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas sobre <Navbar/>', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Crhistian',
    },
    dispatch: jest.fn(),
  };
  let wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/' element={<Navbar />}></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  test('Debe renderizarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Crhistian');
  });

  test('Debe de llamar el logout, el navigate y el dispatch con los argumentos', () => {
    const { dispatch } = contextValue;

    wrapper.find('.logoutLink').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ type: logout });
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
