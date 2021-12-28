import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('Pruebas sobre hook useCounter()', () => {
  test('should return the defaultValue', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toEqual(10);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should return 101 as value', () => {
    const { result } = renderHook(() => useCounter(101));

    const { counter } = result.current;
    expect(counter).toEqual(101);
    expect(counter).toEqual(101);
  });

  test('should increment the counter to equal 11', () => {
    const { result } = renderHook(() => useCounter());

    const { increment } = result.current;
    act(() => increment());
    const { counter } = result.current;

    expect(counter).toEqual(11);
  });

  test('should decrement the counter to equal 9', () => {
    const { result } = renderHook(() => useCounter());

    const { decrement } = result.current;
    act(() => decrement());
    const { counter } = result.current;

    expect(counter).toEqual(9);
  });

  test('should reset the counter to equal 10', () => {
    const { result } = renderHook(() => useCounter());

    const { reset, increment } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;

    expect(counter).toEqual(10);
  });
});
