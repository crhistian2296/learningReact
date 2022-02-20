import NothingSelected from './NothingSelected';
import { Sidebar } from './Sidebar';

const JournalScreen = () => {
  return (
    <div className='journal__main'>
      <Sidebar />

      {/* <main> */}
      <NothingSelected />
      {/* </main> */}
    </div>
  );
};

export default JournalScreen;
