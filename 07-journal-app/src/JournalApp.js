import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './Sass/styles.sass';
import { store } from './store/store';

const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default JournalApp;
