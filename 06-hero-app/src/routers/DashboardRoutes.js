import { Route, Routes } from 'react-router-dom';
// Pages
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
// UI
import { Navbar } from '../components/UI/Navbar';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container my-3'>
        <Routes>
          <Route path='hero/:heroId' element={<HeroScreen />} />
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='dc' element={<DCScreen />} />
          <Route path='search' element={<SearchScreen />} />

          {/* Default */}
          <Route path='/' element={<MarvelScreen />} />
          {/* <Route path='*' element={<Navigate to='/' />} /> */}
        </Routes>
      </div>
    </>
  );

  // *react router v6 convention
  // return (
  //   <>
  //     <Navbar />
  //     <Outlet />
  //   </>
  // );
};
