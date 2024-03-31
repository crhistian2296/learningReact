import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './';
import { loadNotes } from './helpers/loadNotes';

export const startNewNote = () => {
  return async (distaptch, getState) => {
    await distaptch(savingNewNote());

    const { uid } = getState().auth;

    console.log('start new note');
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    await distaptch(addNewEmptyNote(newNote));
    await distaptch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) return new Error('uid does not exist');
    const notes = await loadNotes(uid);
    // console.log(notes);

    await dispatch(setNotes(notes));
  };
};
