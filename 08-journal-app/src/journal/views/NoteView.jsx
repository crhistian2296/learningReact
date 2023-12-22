import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import ImageGallery from '../components/ImageGallery';

const NoteView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      marginBottom={1}
      alignItems='center'
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          18 de enero, 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button>
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
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

NoteView.PropTypes = {};

export default NoteView;
