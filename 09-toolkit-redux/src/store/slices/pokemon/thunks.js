/* eslint-disable no-unused-vars */
import { pokeApi } from '../../../api/pokeApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    if (page < 0 || isNaN(page)) page = 0;

    dispatch(startLoadingPokemons());

    const { data } = await pokeApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
