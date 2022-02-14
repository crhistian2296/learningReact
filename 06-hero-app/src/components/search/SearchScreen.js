import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../heroes/HeroCard';

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const herosFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className='row'>
        <div className='col-sm-5 mb-4'>
          <h3>Search</h3>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              className='form-control'
              name='searchText'
              placeholder='Ej: Flash'
              autoComplete='off'
              onChange={handleInputChange}
              value={searchText}
            />

            <button type='submit' className='btn btn-outline-primary mt-2'>
              Enviar
            </button>
          </form>
        </div>
        <div className='col-sm-7'>
          <h3>Results</h3>
          <hr />

          {q === '' ? (
            <div className='alert alert-info animate__animated animate__fadeIn'>
              Search your hero
            </div>
          ) : (
            herosFiltered.length === 0 && (
              <div className='alert alert-danger animate__animated animate__fadeIn'>{`There is no results for: ${q}`}</div>
            )
          )}

          {herosFiltered &&
            herosFiltered.map((hero) => (
              <>
                <HeroCard key={hero.id} {...hero} className='mb-3' />
                <div className='mb-3'></div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default SearchScreen;
