import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import JournalScreen from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebase-config';
import AuthRouter from './AuthRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else setLoggedIn(false);
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) return <h1>Wait...</h1>;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes path='/auth' component={AuthRouter} isAuthenticated={loggedIn} />
          <PrivateRoutes exact path='/' component={JournalScreen} isAuthenticated={loggedIn} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
