import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  // active: {
  //   id: 'IABC1231',
  //   title: '',
  //   date: 1234567,
  //   imageUrls: [
  //   https://foto1.jpg,
  //   https://foto2.jpg,
  //   ],
  // },
};

export const journalSlice = createSlice({
  name: 'journalSlice',
  initialState,
  reducers: {
    savingNewNote: state => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: state => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
      state.messageSaved = `${action.payload.title}, has been updated`;
    },
    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
