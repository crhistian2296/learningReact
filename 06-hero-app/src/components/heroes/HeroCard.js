import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

// const heroImage = require.context('../../assets/heroes', true);

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  // const imgPath = `assets/heroes/${id}.jpg`;
  // console.log(heroImage(`./${id}.jpg`));

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src={heroImages(`./${id}.jpg`)} className='card-img-top' alt={superhero} />
          </div>
          <div className='col-8 card-body'>
            <h5 className='card-title'>{superhero}</h5>
            <p className='card-text'> {alter_ego} </p>

            {alter_ego !== characters && <p className='text-muted'> {characters} </p>}

            <p className='text-muted'> {first_appearance} </p>
            <Link to={`/hero/${id}`}>More..</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
