import { shallow } from 'enzyme';
import MultiplesCustomHooks from '../../../03-Examples/MultiplesCustomHooks';
import useFetch from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Test sobre <MultiplesCustomHooks>', () => {
  // test('Debe renderizar el componente correctamente', () => {
  //   const wrapper = shallow(<MultiplesCustomHooks />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  test('Debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Crhistian',
          quote: 'Hello test',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultiplesCustomHooks />);
    // console.log(wrapper.html());
    expect(wrapper.find('p').text()).toBe('Hello test');
    expect(wrapper.find('footer').text()).toBe('Crhistian');
  });
});
