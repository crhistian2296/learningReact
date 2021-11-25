import React, { useEffect, useReducer } from 'react';
import TodoAdd from './TodoAdd';
import './TodoApp.css';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

// const initialState = [
//   {
//     id: Date.now(),
//     description: 'Aprender React',
//     done: false,
//   },
// ];

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

const TodoApp = () => {
  const [todosList, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosList));
    // console.log(todosList);
  }, [todosList]);

  const handleAdd = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  return (
    <div className='m-5'>
      <h1>TodoApp: {todosList.length}</h1>
      <hr />
      <div className='row'>
        {/* <div className='col-sm-5'> */}
        <TodoList todosList={todosList} handleDelete={handleDelete} handleToggle={handleToggle} />
        {/* </div> */}
        <div className='col-1'></div>
        <TodoAdd handleAdd={handleAdd} />
      </div>
    </div>
  );
};

export default TodoApp;
