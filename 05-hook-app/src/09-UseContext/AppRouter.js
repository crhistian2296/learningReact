import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LogginScreen from './LogginScreen';

const AppRouter = () => (
  <>
    <Router>
      <Routes>
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/loggin' element={<LogginScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  </>
);
export default AppRouter;
