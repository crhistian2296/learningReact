import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import AuthLayout from '../layout/AuthLayout';

const formData = {
  displayName: 'crhistian',
  email: 'user@mail.com',
  password: 1234,
};

const formValidations = {
  email: [value => value?.includes('@'), 'The email must have @'],
  password: [
    value => value?.length >= 6,
    'The password must have more than 6 charactes',
  ],
  displayName: [value => value?.length >= 1, 'The name is needed'],
};

const Register = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  console.log(displayNameValid, emailValid, passwordValid);

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <AuthLayout title='Register'>
      <form onSubmit={e => onSubmit(e)}>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <TextField
              label='displayName'
              type='displayName'
              name='displayName'
              fullWidth
              autoComplete='displayName'
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label='email'
              type='email'
              name='email'
              fullWidth
              autoComplete='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label='password'
              type='password'
              name='password'
              fullWidth
              autoComplete='current-password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth type='submit'>
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
