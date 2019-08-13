import {
  INCREMENT_GLOBAL_TIMER,
  DECREMENT_GLOBAL_TIMER,
  SET_GLOBAL_TIMER_PERIOD,
  SET_GLOBAL_TIME_SPENT,
  RESET_GLOBAL_TIME_SPENT,
  INCREMENT_TIMER,
  DECREMENT_TIMER,
  SET_TIMER_PERIOD,
  SET_TIME_SPENT,
  RESET_TIME_SPENT,
} from './types';

import initialState from './initialState';

// GAME TIMER
export const incrementGlobalTimer = (payload = 1000) => ({
  type: INCREMENT_GLOBAL_TIMER,
  payload,
});

export const decrementGlobalTimer = (payload = 1000) => ({
  type: DECREMENT_GLOBAL_TIMER,
  payload,
});

export const setGlobalTimerPeriod = (payload = 60 * 1000) => ({
  type: SET_GLOBAL_TIMER_PERIOD,
  payload,
});

export const setGlobalTimeSpent = (payload = 'increment') => ({
  type: SET_GLOBAL_TIME_SPENT,
  payload,
});

export const resetGlobalTimeSpent = (payload = 'increment') => ({
  type: RESET_GLOBAL_TIME_SPENT,
  payload,
});

// ASYNC
let globalTimer;
export const startGlobalTimer = (payload = 'increment') => {
  const method = {
    increment: incrementGlobalTimer,
    decrement: decrementGlobalTimer,
  };

  const incrementOrDecrementTimer = method[payload]
    ? method[payload]
    : incrementTimer;

  return (dispatch) => {
    clearInterval(globalTimer);

    globalTimer = setInterval(() => {
      dispatch(incrementOrDecrementTimer());
      dispatch(setGlobalTimeSpent(payload));
    }, 1000);
  };
};

export const stopGlobalTimer = () => {
  return () => clearInterval(globalTimer);
};

export const resetGlobalTimer = (payload) => {
  return (dispatch) => {
    dispatch(stopGlobalTimer());
    dispatch(setGlobalTimerPeriod(initialState.levelTimer || payload));
  };
};

export const endGlobalTimer = () => {
  return (dispatch) => dispatch(stopGlobalTimer());
}


// LEVEL TIMER
export const incrementTimer = (payload = 1000) => ({
  type: INCREMENT_TIMER,
  payload,
});

export const decrementTimer = (payload = 1000) => ({
  type: DECREMENT_TIMER,
  payload,
});

export const setTimerPeriod = (payload = 60 * 1000) => ({
  type: SET_TIMER_PERIOD,
  payload,
});

export const setTimeSpent = (payload = 'increment') => ({
  type: SET_TIME_SPENT,
  payload,
});

export const resetTimeSpent = (payload = 'increment') => ({
  type: RESET_TIME_SPENT,
  payload,
});


// ASYNC
let timer;
export const startTimer = (payload = 'increment') => {
  const method = {
    increment: incrementTimer,
    decrement: decrementTimer,
  };

  const incrementOrDecrementTimer = method[payload]
    ? method[payload]
    : incrementTimer;

  return (dispatch) => {
    clearInterval(timer);

    timer = setInterval(() => {
      dispatch(incrementOrDecrementTimer());
      dispatch(setTimeSpent(payload));
    }, 1000);
  };
};

export const stopTimer = () => {
  return () => clearInterval(timer);
};

export const resetTimer = (payload) => {
  return (dispatch) => {
    dispatch(stopTimer());
    dispatch(setTimerPeriod(initialState.levelTimer || payload));
  };
};

export const endTimer = () => {
  return (dispatch) => dispatch(stopTimer());
}

export default {
  incrementGlobalTimer,
  decrementGlobalTimer,
  setGlobalTimerPeriod,
  setGlobalTimeSpent,
  resetGlobalTimeSpent,
  startTimer,
  incrementTimer,
  decrementTimer,
  setTimerPeriod,
  resetTimer,
  resetTimeSpent,
};
