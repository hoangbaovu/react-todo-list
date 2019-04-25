import * as types from '../constants/ActionTypes';

let initState = {
  id: '',
  name: '',
  complete: false
};

const itemSelected = (state = initState, action) => {
  switch (action.type) {
    case types.SELECT_ITEM:
      return action.item;
    case types.UNSELECT_ITEM:
      return { id: '', name: '', complete: false };
    default:
      return state;
  }
}

export default itemSelected;