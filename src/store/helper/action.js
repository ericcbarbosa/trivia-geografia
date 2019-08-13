import {
  SET_HELPERS,
  SHOW_HELPERS,
  INCREMENT_HINTS,
  DECREMENT_HINTS,
  SET_HINTS,
  INCREMENT_SKIPS,
  DECREMENT_SKIPS,
} from './types';

export const setHelpers = (payload) => ({
  type: SET_HELPERS,
  payload,
});

export const showHelpers = (payload = false) => ({
  type: SHOW_HELPERS,
  payload,
});

// Hints
export const incrementHints = (payload = 1) => ({
  type: INCREMENT_HINTS,
  payload,
});

export const decrementHints = (payload = 1) => ({
  type: DECREMENT_HINTS,
  payload,
});

export const setHints = (payload) => ({
  type: SET_HINTS,
  payload,
});

// ASYNC
export const useHint = (active = false) => {
  return (dispatch) => {
    dispatch(setHelpers({
      helpers: {
        usedHint: active,
      },
    }));
  };
};

// Skips
export const incrementSkips = (payload = 1) => ({
  type: INCREMENT_SKIPS,
  payload,
});

export const decrementSkips = (payload = 1) => ({
  type: DECREMENT_SKIPS,
  payload,
});

export const resetHints = (payload) => {
  return (dispatch) => {
    dispatch(setHints());
  };
};

// ASYNC
export const useSkip = (active = false) => {
  return (dispatch) => {
    dispatch(setHelpers({
      helpers: {
        usedSkip: active,
      },
    }));
  };
};


export default {
  showHelpers,
  setHelpers,
  incrementHints,
  decrementHints,
  setHints,
  useHint,
  resetHints,
  incrementSkips,
  decrementSkips,
};
