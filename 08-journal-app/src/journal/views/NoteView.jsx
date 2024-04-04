import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setActiveNote, startSavingNote } from '../../store/journal';
import ImageGallery from '../components/ImageGallery';

const NoteView = () => {
  const { active: note } = useSelector(state => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(note);
  const dispatch = useDispatch();

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  });

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      marginBottom={1}
      alignItems='center'
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={onSaveNote}>
          <SaveOutlined sx={{ mr: 1, fontSize: 30 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Enter a title'
          label='Title'
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='How was your day?'
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

export default NoteView;
