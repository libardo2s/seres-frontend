import { createStore, combineReducers } from 'redux';

import cursos from './reducers/cursos';

const reducers = combineReducers({
    cursos
});

const store = createStore(reducers);

export default store;