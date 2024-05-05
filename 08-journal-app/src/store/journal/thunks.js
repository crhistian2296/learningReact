import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from './';
import { fileUpload, loadNotes } from './helpers';

export const startNewNote = () => {
  return async (distaptch, getState) => {
    await distaptch(savingNewNote());

    const { uid } = getState().auth;

    console.log('start new note');
    const newNoteData = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNoteData);

    const newNote = { ...newNoteData, id: newDoc._key.path.segments.at(3) };

    await distaptch(addNewEmptyNote(newNoteData));
    await distaptch(startLoadingNotes(uid));
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

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });
    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const results = await Promise.all([...files].map(fileUpload));

    dispatch(setPhotosToActiveNote(results));
  };
};
