export const SET_SHAPE = 'SET_SHAPE';
export const SET_COLOR = 'SET_COLOR';
export const UPDATE_SHAPE_COLOR = 'UPDATE_SHAPE_COLOR';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export function setShape({shape}) {
  return {
    type: SET_SHAPE,
    shape
  };
}
export function setColor(color) {
  return {
    type: SET_COLOR,
    color
  };
}

export function updateShapeColor(update) {
  return {
    type: UPDATE_SHAPE_COLOR,
    update
  };
}

export function undo(undo) {
  return {
    type: UNDO,
    undo
  };
}

export function redo(redo) {
  return {
    type: REDO,
    redo
  };
}