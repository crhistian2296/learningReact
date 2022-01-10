import { shallow } from 'enzyme';
import RealExampleUseReff from '../../../04-UseReff/RealExampleUseReff';

describe('Pruebas sobre <RealExampleUseReff/>', () => {
  const wrapper = shallow(<RealExampleUseReff />);

  test('Deberia de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultiplesCustomHooks').exists()).toBeFalsy();
  });

  test('Deberia de mostrar el componente <MultipleCustomHooks/> correctamente', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultiplesCustomHooks').exists()).toBeTruthy();
  });
});
