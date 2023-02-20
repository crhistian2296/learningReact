import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RoutLink } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

const Login = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <TextField label='mail' type='email' fullWidth />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField label='password' type='password' fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
              <Google />
              <Typography marginLeft={1} variant='body2'>
                Google
              </Typography>
            </Button>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link
              component={RoutLink}
              color='inherit'
              mt={1}
              to='/auth/register'
            >
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default Login;
