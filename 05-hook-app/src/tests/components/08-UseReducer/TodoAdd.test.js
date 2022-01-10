import { shallow } from 'enzyme';
import TodoAdd from '../../../08-UseReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
  const handleAdd = jest.fn();

  const wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe de llamar a handleTodo si el valor TODO es vacio', () => {
    // * Forma alternativa mas conveniente si se produce submit
    // const formSubmit = wrapper.find('form').prop('onSubmit');
    // formSubmit({ preventDefault() {} });

    wrapper.find('button').simulate('click');
    expect(handleAdd).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamar a handleTodo y resetear el campo despues', () => {
    const value = 'Aprender Typescript';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
