import * as types from '../constants/ActionTypes';

export const actionSearch = (search) => {
  return {
    type: types.CHANGE_SEARCH,
    search
  }
}

export const actionDeleteItem = id => {
  return {
    type: types.DELETE_ITEM,
    id
  }
}