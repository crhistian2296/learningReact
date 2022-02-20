import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NothingSelected = () => {
  return (
    <div className='nothing__main-content'>
      <p>
        Select something
        <br />
        or create an entry
      </p>
      <FontAwesomeIcon icon={faStar} size='5x' className='mt-5' />
    </div>
  );
};

export default NothingSelected;
