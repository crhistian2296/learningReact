import { act, renderHook } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';
describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Carlitos',
    email: 'carlitosBrown@gmail.com',
  };

  test('Debe regresar el formulario inicial', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });

  test('Debe de cambiar la propiedad "name" de initialForm', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() =>
      handleInputChange({
        target: {
          name: 'name',
          value: 'Fernando',
        },
      })
    );
    const [formValues] = result.current;
    const changed = {
      name: 'Fernando',
      email: 'carlitosBrown@gmail.com',
    };
    expect(formValues).toEqual(changed);
  });

  test('Debe de resetear el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Fernando',
        },
      });
      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
