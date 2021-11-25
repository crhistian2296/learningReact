import React from 'react';
import useForm from '../hooks/useForm';

const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({ description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 1) {
      return alert('Introduce your TODO before save');
    }
    const newTodo = {
      id: Date.now(),
      description,
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };
  return (
    <div className='col-sm-5'>
      <h4>Agregar TODO</h4>
      <form action='todo' onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Aprender...'
          className='form-control'
          onChange={handleInputChange}
          value={description}
        />
        <button type='submit' className='btn btn-outline-success mt-2'>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
