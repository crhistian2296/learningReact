import { mount } from 'enzyme';
import AppRouter from '../../../09-UseContext/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
  const wrapper = mount(<AppRouter />);

  test('Debe de renderizar correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
