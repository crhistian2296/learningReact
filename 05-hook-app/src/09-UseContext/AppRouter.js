import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Navbar from './Navbar';
import NotFound from './NotFound';

const AppRouter = () => (
  <>
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/404' element={<NotFound />} />
          {/* Default Route if nothing match */}
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </div>
    </Router>
  </>
);
export default AppRouter;
