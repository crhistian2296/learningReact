import { BrowserRouter as Router } from 'react-router-dom';
import JournalRouter from './router/JournalRouter';
import { AppTheme } from './theme';

const JournalApp = () => {
  return (
    <Router>
      <AppTheme>
        <JournalRouter />
      </AppTheme>
    </Router>
  );
};

export default JournalApp;
