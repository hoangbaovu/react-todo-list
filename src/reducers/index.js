import { combineReducers } from 'redux';
import items from './items';
import search from './search';

const appReducers = combineReducers({
  items,
  search
});

export default appReducers;