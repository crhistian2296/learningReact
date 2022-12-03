import { HashRouter } from 'react-router-dom';
import JournalRouter from './router/JournalRouter';
import { AppTheme } from './theme';

const JournalApp = () => {
  return (
    <HashRouter>
      <AppTheme>
        <JournalRouter />
      </AppTheme>
    </HashRouter>
  );
};

export default JournalApp;
