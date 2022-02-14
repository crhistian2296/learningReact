import 'animate.css';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
      <div className='row row-cols-xl-3 row-cols-md-2 row-cols-1 g-3 animate__animated animate__fadeIn'>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
