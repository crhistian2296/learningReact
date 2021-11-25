import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todosList, handleDelete, handleToggle }) => (
  <div className='col-sm-5'>
    <ol className='list-group list-group-flush'>
      {todosList.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ol>
  </div>
);

export default TodoList;
