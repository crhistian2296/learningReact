import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RoutLink } from 'react-router-dom';

const Login = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid
        container
        className='box-shadow'
        sx={{
          backgroundColor: 'white',
          p: 3,
          borderRadius: 2,
          maxWidth: '420px',
        }}
      >
        <Typography variant='h5' mb={1}>
          Login
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <TextField label='mail' type='email' fullWidth />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label='password' type='password' fullWidth />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google/>
                <Typography
                  marginLeft={1}
                  variant='body2'
                >
                  Google
                </Typography>
              </Button>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RoutLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
