import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const AppRouter = () => {
  return (
    <Router>
      <div className='main'>
        <Routes>
          {/* <Route path='login' element={<LoginScreen />} /> */}
          <Route
            path='login'
            element={
              <PublicRoutes>
                <LoginScreen />
              </PublicRoutes>
            }
          />
          <Route
            path='*'
            element={
              <PrivateRoutes>
                <DashboardRoutes />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    </Router>
  );

  // *react router v6 convention
  // return (
  //   <Router>
  //     <div className='main'>
  //       <Routes>
  //         <Route path='login' element={<LoginScreen />} />
  //         <Route path='' element={<PrivateRoutes />}>
  //           <Route element={<DashboardRoutes />}>
  //             <Route path='hero/:heroId' element={<HeroScreen />} />
  //             <Route path='marvel' element={<MarvelScreen />} />
  //             <Route path='dc' element={<DCScreen />} />
  //             <Route path='search' element={<SearchScreen />} />

  //             {/* Default */}
  //             <Route path='/' element={<MarvelScreen />} />
  //           </Route>
  //         </Route>
  //       </Routes>
  //     </div>
  //   </Router>
  // );
};

export default AppRouter;
