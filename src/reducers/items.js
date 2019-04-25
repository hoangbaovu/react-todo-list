import { reject } from 'lodash';
import * as types from '../constants/ActionTypes';
import * as config from '../constants/Config';
const uuidv4 = require('uuid/v4');

let initState = [];

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
      if (item.id !== '') { //edit

        // items.forEach((value, key) => {
        //  if (value.id === item.id) {
        //    items[key].name = item.name;
        //  }
        // });

        state = reject(state, { id: item.id });
        id = item.id;
      } else {
        id = uuidv4();
      }

      state.push({
        id,
        name: item.name,
        complete: item.complete
      });
      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state]
    case types.CLICK_ITEM:
      const complete = action.item.complete;
      const index = state.indexOf(action.item);

      state = [
        ...state.slice(0, index),
        {
          ...action.item,
          complete: !complete
        },
        ...state.slice(index + 1)
      ];
      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default items;