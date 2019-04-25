import * as types from '../constants/ActionTypes';

export const actionSearch = search => {
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

export const actionSubmitForm = item => {
  return {
    type: types.SUBMIT_FORM,
    item
  }
}

export const actionSelectedItem = item => {
  return {
    type: types.SELECT_ITEM,
    item
  }
}

export const actionUnSelectItem = () => {
  return {
    type: types.UNSELECT_ITEM,
  }
}