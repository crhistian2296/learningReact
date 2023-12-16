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
    </JournalLayout>
  );
};

// NothingSelected
// NoteView

export default HomePage;
