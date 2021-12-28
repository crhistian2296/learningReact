import { shallow } from 'enzyme';
import HomeScreen from '../../09-UseContext/HomeScreen';

describe('Pruebas sobre <HomeScreen/>', () => {
  const wrapper = shallow(<HomeScreen />);
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
