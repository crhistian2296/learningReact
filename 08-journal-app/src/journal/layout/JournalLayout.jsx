import { Box, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import SideBar from '../components/Sidebar';

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
  return (
    <Box display='flex'>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component='main' flexGrow={1} p={3} justifyContent={'space-between'}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;

JournalLayout.propTypes = {
  children: PropTypes.element,
};
