import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import JournalLayout from '../layout/JournalLayout';
import NothingSelectedView from '../views/NothingSelectedView';

const HomePage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum
        blanditiis nostrum culpa, molestias suscipit reprehenderit. Iste
        consequuntur numquam voluptatibus asperiores unde, obcaecati, excepturi
        labore magni eligendi itaque esse aspernatur!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facilis illum blanditiis nostrum culpa,
        molestias suscipit reprehenderit. Iste consequuntur numquam voluptatibus
        asperiores unde, obcaecati, excepturi labore magni eligendi itaque esse
        aspernatur!
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.7,
            animation: 'opacity 300ms',
          },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};

// NothingSelected
// NoteView

export default HomePage;
