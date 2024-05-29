import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { startLogOut } from '../../store/auth/thunks';

const NavBar = ({ drawerWidth }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    console.debug('logout');
    dispatch(startLogOut());
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h1' fontSize='40px' noWrap component='div'>
            JournalApp
          </Typography>
          <IconButton onClick={() => onLogout()} color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default NavBar;
