import * as types from '../constants/ActionTypes';
import * as config from '../constants/Config';
const uuidv4 = require('uuid/v4');

let initState = [
  { id: "1", name: "Giat Ao", complete: false },
  { id: "2", name: "Giat Quan", complete: false },
  { id: "3", name: "Lau San", complete: false }
];

let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE));
initState = (tasks !== null && tasks.length > 0) ? tasks : initState;
const items = (state = initState, action) => {
  let id = null;
  switch (action.type) {
    case types.DELETE_ITEM:
      id = action.id;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          state.splice(i, 1);
        }
      }
      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state];
    case types.SUBMIT_FORM:
      let { item } = action;
      state.push({
        id: uuidv4(),
        name: item.name,
        complete: item.complete
      });
      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state]
    default:
      return state;
  }
}

export default items;