import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

// Se combinan los reducers antes de crear el store
const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
