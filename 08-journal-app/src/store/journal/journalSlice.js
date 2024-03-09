import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: true,
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
  name: 'counter',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNotes: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: state => {
      state.active = true;
    },
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment } = journalSlice.actions;
