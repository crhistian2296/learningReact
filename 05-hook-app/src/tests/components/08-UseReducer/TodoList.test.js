import { shallow } from 'enzyme';
import TodoList from '../../../08-UseReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

const handleDelete = jest.fn();
const handleToggle = jest.fn();
describe('Pruebas en <TodoList/>', () => {
  const wrapper = shallow(
    <TodoList todosList={demoTodos} handleDelete={handleDelete} handleToggle={handleToggle} />
  );
  test('Debe de renderizarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener 2 <TodoItem/>', () => {
    expect(wrapper.find('TodoItem').length).toEqual(demoTodos.length);
    expect(typeof wrapper.find('TodoItem').at(0).prop('handleDelete')).toBe('function');
  });
});
