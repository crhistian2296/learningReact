import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HeroScreen from '../../../components/heroes/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <HeroScreen/>', () => {
  test('No debe de renderizar ningun heroe sino Not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path='/hero' element={<HeroScreen />} />
          <Route path='/' element={<h1>Not found</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Not found');
  });

  test('Debe de renderizar un heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroId' element={<HeroScreen />} />
          <Route path='/' element={<h1>Not found</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find('h2').text().trim()).toBe('Spider Man');
  });

  test('Debe de renderizar un heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider-fake']}>
        <Routes>
          <Route path='/hero/:heroId' element={<HeroScreen />} />
          <Route path='/' element={<h1>Not found</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Not found');
  });

  test('Debe de navegar hacia la pantalla anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroId' element={<HeroScreen />} />
          <Route path='/' element={<h1>Not found</h1>} />
        </Routes>
      </MemoryRouter>
    );

    wrapper.find('button').simulate('click');
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
