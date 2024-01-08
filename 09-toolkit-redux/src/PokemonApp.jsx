import { /* useCallback, useEffect, */ useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useGetPokemonQuery } from './api/pokeApi';

const PokemonApp = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const dispatch = useCallback(useDispatch(), []);
  // const { pokemons, page } = useSelector((state) => state.pokemons);
  const [page, setPage] = useState(0);
  const { data: pokemons, isLoading } = useGetPokemonQuery(page);
  // useEffect(() => {
  //   dispatch(getPokemons());
  // }, [dispatch]);

  return (
    <>
      <h1>PokemoApp</h1>

      <hr />
      <p>Loading: {String(isLoading)} </p>
      <h3>Page: {page}</h3>
      <ul style={{ listStyle: 'none' }}>
        {pokemons &&
          pokemons.results.map((pokemon, index) => {
            let id = pokemon.url.split('/').at(-2);
            return (
              <li key={index}>
                {id}. {pokemon.name}
              </li>
            );
          })}
      </ul>

      <button
        disabled={page === 0 && true}
        onClick={() => {
          setPage((state) => state - 1);
        }}
      >
        PREV
      </button>
      <button
        onClick={() => {
          setPage((state) => state + 1);
        }}
      >
        NEXT
      </button>
    </>
  );
};

export default PokemonApp;
