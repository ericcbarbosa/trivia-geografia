import {
  SET_HELPERS,
  SHOW_HELPERS,
  INCREMENT_HINTS,
  DECREMENT_HINTS,
  SET_HINTS,
  INCREMENT_SKIPS,
  DECREMENT_SKIPS,
} from './types';

import initialState from './initialState';

export const helperReducer = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case SET_HELPERS:
      return setHelpers(state, payload);

    case SHOW_HELPERS:
      return showHelpers(state, payload);

    case INCREMENT_HINTS:
      return incrementHints(state, payload);

    case DECREMENT_HINTS:
      return decrementHints(state, payload);

    case SET_HINTS:
      return setHints(state, payload);

    case INCREMENT_SKIPS:
      return incrementSkips(state, payload);

    case DECREMENT_SKIPS:
      return decrementSkips(state, payload);

    default:
      return state;
  }
};

function setHelpers(state, payload) {
  const { helpers } = payload || initialState;

  return {
    ...state,
    ...helpers,
  };
}

function showHelpers(state, showHelpers) {
  return {
    ...state,
    showHelpers,
  };
}

function incrementHints(state, value) {
  const { hints } = state;

  return {
    ...state,
    hints: hints + value,
  };
}

function decrementHints(state, value) {
  const { hints } = state;

  return {
    ...state,
    hints: (hints - value) <= 0 ? 0 : hints - value,
  };
}

function setHints(state, value) {
  return {
    ...state,
    hints: value,
  };
}


function incrementSkips(state, value) {
  const { skips } = state;

  return {
    ...state,
    skips: skips + value,
  };
}

function decrementSkips(state, value) {
  const { skips } = state;

  return {
    ...state,
    skips: (skips - value) <= 0 ? 0 : skips - value,
  };
}