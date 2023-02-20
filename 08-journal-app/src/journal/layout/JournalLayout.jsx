import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
  return (
    <Box display='flex'>
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}

      <Box
        component='main'
        flexGrow={1}
        p={3}
        justifyContent='space-between'
      ></Box>
      {children}
    </Box>
  );
};

export default JournalLayout;

JournalLayout.propTypes = {
  children: PropTypes.element,
};
