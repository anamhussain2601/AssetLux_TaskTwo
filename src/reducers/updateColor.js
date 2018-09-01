
import { SET_COLOR, SET_SHAPE, UPDATE_SHAPE_COLOR } from '../actions/index';

export const updateColor = (state = {shape:null , color: null , recent:[]}, action) => {
  switch (action.type) {
    case SET_COLOR:
      return Object.assign({}, state, { color: action.color, update:false });
    case SET_SHAPE:
      return Object.assign({}, state, { shape: action.shape, update:false });
    case UPDATE_SHAPE_COLOR:
      return Object.assign({}, state, { update:action.update});
    default:
      return state;
  }
};

export default updateColor;
