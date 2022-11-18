import { db } from '../firebase/firebase-config';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  // es segundo parametro es similar al hook useSelector
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    // con esta linea se crea una nueva nota en firebase directamente
    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notas = await loadNotes(uid);

    return dispatch(setNotes(notas));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
