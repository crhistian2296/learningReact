import { BrowserRouter as Router } from 'react-router-dom';
import JournalRouter from './router/JournalRouter';

const JournalApp = () => {
  return (
    <Router>
      <JournalRouter />
    </Router>
  );
};

export default JournalApp;
