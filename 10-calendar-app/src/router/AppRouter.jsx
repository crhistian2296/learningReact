import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar/pages/CalendarPage';

const AppRouter = () => {
  const authStatus = 'authenticated'; // 'authenticated' | 'not-authenticated'
  return (
    <>
      <Routes>
        {authStatus === 'not-authenticated' ? (
          <Route path='/auth/*' element={<LoginPage />}></Route>
        ) : (
          <Route path='/*' element={<CalendarPage />}></Route>
        )}
        <Route path='/*' element={<Navigate to={'/auth/login'} />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
