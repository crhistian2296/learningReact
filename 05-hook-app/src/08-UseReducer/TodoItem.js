import React from 'react';

const TodoItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <div
      key={todo.id}
      className='list-group-item d-flex align-content-center justify-content-between'
    >
      <button
        className={`btn toggle text ${todo.done === true && 'complete'}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.description}
      </button>
      <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default TodoItem;
