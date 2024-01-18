import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
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
            <TextField
              label='email'
              type='email'
              fullWidth
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label='password'
              type='password'
              fullWidth
              autoComplete='current-password'
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
              Create account
            </Button>
          </Grid>
          <Grid container direction='row' justifyContent='end' pt={4}>
            <Typography mr={1}>Already have an account?</Typography>
            <Link component={RouteLink} color='inherit' to='/auth/login'>
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default Register;
