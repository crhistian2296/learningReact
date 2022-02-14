import 'animate.css';
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
  const navigate = useNavigate();

  //Captacion del dato pasado por url
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) return <Navigate to='/' />;

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  // const imgPath = `/assets/heroes/${id}.jpg`;
  // const heroImage = require.context('../../assets/heroes');

  const handleClick = () => navigate(-1);

  return (
    <div>
      <div className='row mt-5'>
        <div className='col-4'>
          <img
            src={heroImages(`./${heroId}.jpg`)}
            alt={id}
            className='img-thumbnail animate__animated animate__fadeInLeft'
          />
        </div>
        <div className='col-8 animate__animated animate__fadeIn'>
          <h2>{superhero}</h2>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Alter ego: {alter_ego} </li>
            <li className='list-group-item'>Publisher: {publisher} </li>
            <li className='list-group-item'>First appearance: {first_appearance} </li>
          </ul>

          <h5 className='mt-3'>Characters</h5>
          <p> {characters} </p>

          <button className='btn btn-outline-primary' onClick={handleClick}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
