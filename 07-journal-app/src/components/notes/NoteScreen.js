import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  return (
    <div className='notes__main'>
      <NotesAppBar />

      <div className='notes__content'>
        <input type='text' className='notes__title--input' placeholder='Entry name' />
        <textarea
          name='textarea'
          className='notes__textarea'
          placeholder='What did occur me today...'
        ></textarea>

        <div className='notes__image'>
          <img
            src='https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg'
            alt='purple landscape'
            height='150px'
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
