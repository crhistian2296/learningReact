import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles.css';

const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default CalendarApp;
