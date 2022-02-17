import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <>
      <h3 className='box-container__title'>Register</h3>

      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='box-container__input'
          autoComplete='off'
        />
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
        <input
          type='text'
          placeholder='Confirm'
          name='password2'
          className='box-container__input'
        />
        <button type='submit' className='btn btn-primary btn-block mt-1'>
          Register
        </button>

        <Link to='/auth/login' className='link mt-5'>
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
