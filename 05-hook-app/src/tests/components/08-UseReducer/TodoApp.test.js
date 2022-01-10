import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import TodoApp from '../../../08-UseReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});
  test('Debe de renderizar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de agregar un TODO', () => {
    const wrapper2 = mount(<TodoApp />);

    act(() => {
      wrapper2.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
      wrapper2.find('TodoAdd').prop('handleAdd')(demoTodos[1]);
    });

    expect(wrapper2.find('h1').text().trim()).toBe('TodoApp: 2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('Debe de borrar un TODO', () => {
    wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 0');
  });
});
