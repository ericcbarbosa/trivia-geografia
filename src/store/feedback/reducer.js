import {
  SET_VISIBILITY,
  SET_TYPE,
  SET_IS_CORRECT,
  SET_MESSAGE,
  SET_FEEDBACK,
} from './types';

import initialState from './initialState';

export const feedbackReducer = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case SET_VISIBILITY:
      return setVisibility(state, payload);

    case SET_TYPE:
      return setType(state, payload);

    case SET_IS_CORRECT:
      return setIsCorrect(state, payload);

    case SET_MESSAGE:
      return setMessage(state, payload);

    case SET_FEEDBACK:
      return setFeedback(state, payload);

    default:
      return state;
  }
};

function setVisibility(state, visible) {
  return {
    ...state,
    visible,
  };
}

function setType(state, type) {
  return {
    ...state,
    type,
  };
}

function setIsCorrect(state, correct) {
  return {
    ...state,
    correct,
  };
}

function setMessage(state, value) {
  return {
    ...state,
    hints: value,
  };
}

function setFeedback(state, payload) {
  return {
    ...state,
    ...payload,
  };
}
