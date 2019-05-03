import { combineReducers } from 'redux';
import items from './items';
import itemSelected from './itemSelected';
import search from './search';

const appReducers = combineReducers({
  items,
  itemSelected,
  search
});

export default appReducers;