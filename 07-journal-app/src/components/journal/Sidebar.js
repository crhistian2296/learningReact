import { faCalendarPlus, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import JournalEntries from './JournalEntries';

export const Sidebar = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleLogout = () => {
    dispatch(startLogout());
    // history.push('/auth/login');
  };

  return (
    <aside className='journal__aside'>
      <div className='journal__aside--navbar'>
        <h3 className='mt-5'>
          <span>
            <FontAwesomeIcon icon={faMoon} /> Crhistian
          </span>
        </h3>
        <button className='btn' onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className='journal__aside--new-entry'>
        <FontAwesomeIcon icon={faCalendarPlus} size='5x' />
        <p className='mt-5'>New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
