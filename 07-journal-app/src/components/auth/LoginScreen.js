import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startGoogleLogin, startLoginWithEmailAsync } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import useForm from '../../hooks/useFrom';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);
  const { formValues, handleInputChange } = useForm({
    email: 'lucas22@gmail.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginWithEmailAsync(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password.trim().length < 6) {
      console.log(password.trim().length);
      dispatch(setError('The password must be over 6 characters'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  useEffect(() => {
    if (msgError) return Swal.fire('Error', msgError, 'error');
  }, [msgError]);

  const handleClick = () => dispatch(removeError());

  return (
    <>
      <h3 className='box-container__title'>Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='box-container__input'
          value={email}
          onChange={handleInputChange}
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='box-container__input'
          value={password}
          onChange={handleInputChange}
        />
        <button type='submit' className='btn btn-primary btn-block mt-1' disabled={loading}>
          Login
        </button>
        <div className='box-container__social-networks'>
          <p>Login with social networks</p>

          <div className='google-btn' onClick={handleGoogleLogin}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='google-btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/register' className='link' onClick={handleClick}>
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
