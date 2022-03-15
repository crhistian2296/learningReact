import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegisterWithEmailAsync } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import useForm from '../../hooks/useFrom';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);
  // console.log(ui);

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
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password.trim() !== password2.trim() || password.trim().length < 6) {
      dispatch(setError('The password must be over 6 characters and match itself'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  useEffect(() => {
    if (msgError) return Swal.fire('Error', msgError, 'error');
  }, [msgError]);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(formValues);
    if (isFormValid()) dispatch(startRegisterWithEmailAsync(email, password, name));
  };

  const handleClick = () => dispatch(removeError());

  return (
    <>
      <h3 className='box-container__title'>Register</h3>

      <form onSubmit={handleRegister}>
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
        <button type='submit' className='btn btn-primary btn-block mt-1' disabled={loading}>
          Register
        </button>

        <Link to='/auth/login' className='link mt-5' onClick={handleClick}>
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
