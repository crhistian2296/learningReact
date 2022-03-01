import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import useForm from '../../hooks/useFrom';

const LoginScreen = () => {
  const { formValues, handleInputChange } = useForm({
    email: 'cristof@gmail.com',
    password: '1234',
  });

  const { email, password } = formValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(123456, 'cristof'));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

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
        <button type='submit' className='btn btn-primary btn-block mt-1'>
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
        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
