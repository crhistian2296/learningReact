import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import useForm from '../../hooks/useFrom';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm({
    name: 'Lucas',
    email: 'lucas22@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is require'));
      console.log('dispatch name hecho');
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      console.log('dispatch email hecho');
      return false;
    } else if (password.trim() !== password2.trim() || password.length < 5) {
      dispatch(setError('The password must be over 6 characters and match itself'));
      console.log('dispatch password hecho');
      return false;
    }
    dispatch(removeError());
    console.log('dispatch remove hecho');
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(formValues);
    if (isFormValid()) console.log('Formulario aceptado');
  };

  return (
    <>
      <h3 className='box-container__title'>Register</h3>

      <form onSubmit={handleRegister}>
        <div className='box-container__alert-error'>Hola mundo</div>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleInputChange}
          className='box-container__input'
          autoComplete='off'
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
          className='box-container__input'
          autoComplete='off'
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
          className='box-container__input'
        />
        <input
          type='text'
          placeholder='Confirm'
          name='password2'
          value={password2}
          onChange={handleInputChange}
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
