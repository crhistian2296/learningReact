import { shallow } from 'enzyme';
import TodoItem from '../../../08-UseReducer/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <todoListitem/>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamar a la funcion handleDelete', () => {
    wrapper.find('.btn-danger').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('Debe de llamar a la funcion handleToggle', () => {
    wrapper.find('.toggle').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('Debe de mostrar el texto del item correctamente', () => {
    const p = wrapper.find('.text').text();
    // `{0 + 1}. {todo.description}`
    expect(p).toBe(`1. ${demoTodos[0].description}`);
  });

  test('Debe de tener la clase "complete" si todo.done es true', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(wrapper.find('.toggle').hasClass('complete')).toBeTruthy();
  });
});
