import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <>
      <h3 className='box-container__title'>Login</h3>

      <form>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='box-container__input'
          autoComplete='off'
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          className='box-container__input'
        />
        <button type='submit' className='btn btn-primary btn-block mt-1'>
          Login
        </button>
        <div className='box-container__social-networks'>
          <p>Login with social networks</p>

          <div className='google-btn'>
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
