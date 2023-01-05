import { Button, Grid, Link, TextField } from '@mui/material';
import { Link as RoutLink } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

const Register = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <TextField label='name' type='name' fullWidth />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField label='email' type='email' fullWidth />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField label='password' type='password' fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
              Create account
            </Button>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RoutLink} color='inherit' to='/auth/login'>
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default Register;
