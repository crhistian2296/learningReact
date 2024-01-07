import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';
import { useCallback } from 'react';

const PokemonApp = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispatch = useCallback(useDispatch(), []);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>PokemoApp</h1>

      <hr />
      <ul>
        <li>hola </li>
        <li>hola </li>
        <li>hola </li>
      </ul>
    </>
  );
};

export default PokemonApp;
