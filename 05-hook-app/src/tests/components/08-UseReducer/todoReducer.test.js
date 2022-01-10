import { todoReducer } from '../../../08-UseReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <todoReducer/>', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('Debe retornar el estado con el nuevo TODO', () => {
    const newTodo = {
      id: 3,
      description: 'Aprender Node',
      done: false,
    };

    const newAction = {
      type: 'add',
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, newAction);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Debe retornar el estado con un TODO menos', () => {
    const deleteAction = {
      type: 'delete',
      payload: 2,
    };

    const state = todoReducer(demoTodos, deleteAction);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test('Debe retornar el estado con un TODO finalizado', () => {
    const toggleAction = {
      type: 'toggle',
      payload: 2,
    };

    const state = todoReducer(demoTodos, toggleAction);
    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(demoTodos[0]);
  });
});
