import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispatch = useCallback(useDispatch(), []);
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>PokemoApp</h1>

      <hr />
      <p>Loading: {String(isLoading)} </p>
      <h3>Page: {page}</h3>
      <ul style={{ listStyle: 'none' }}>
        {pokemons &&
          pokemons.map((pokemon, index) => {
            let id = pokemon.url.split('/').at(-2);
            return (
              <li key={index}>
                {id}. {pokemon.name}
              </li>
            );
          })}
      </ul>

      <button
        disabled={page === 1 && true}
        onClick={() => {
          dispatch(getPokemons(page - 2));
        }}
      >
        PREV
      </button>
      <button
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        NEXT
      </button>
    </>
  );
};

export default PokemonApp;
