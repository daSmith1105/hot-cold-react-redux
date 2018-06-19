import { createStore } from 'redux';
import { masterReducer } from './reducers/index';

export default createStore(masterReducer);


