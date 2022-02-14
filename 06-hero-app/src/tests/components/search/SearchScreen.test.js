import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <SearchScreen/>', () => {
  test('Debe de hacer el render con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search your hero');
  });

  test('Debe de mostrar a Batman y el input con el queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>
    );
    // const queryParameter = window.location.pathname.trim();
    // console.log(queryParameter);

    expect(wrapper.find('h5').text().trim()).toBe('Batman');
    expect(wrapper.find('input').prop('value').trim()).toBe('batman');
  });

  test('Debe de mostrar alerta de busqueda fallida', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no results for: batman123');
  });

  test('Debe llamar el navigate a la nueva pantalla', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', { target: { name: 'searchText', value: 'batman' } });

    // const useNavigate = jest.fn();

    wrapper.find('form').prop('onSubmit')({ preventDefault() {} });
    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
