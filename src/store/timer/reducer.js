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

export const timerReducer = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case INCREMENT_GLOBAL_TIMER:
      return incrementGlobalTimer(state, payload);

    case DECREMENT_GLOBAL_TIMER:
      return decrementGlobalTimer(state, payload);

    case SET_GLOBAL_TIMER_PERIOD:
      return setGlobalTimerPeriod(state, payload);

    case SET_GLOBAL_TIME_SPENT:
      return setGlobalTimeSpent(state, payload);

    case RESET_GLOBAL_TIME_SPENT:
      return resetGlobalTimeSpent(state, payload);

    case INCREMENT_TIMER:
      return incrementTimer(state, payload);

    case DECREMENT_TIMER:
      return decrementTimer(state, payload);

    case SET_TIMER_PERIOD:
      return setTimerPeriod(state, payload);

    case SET_TIME_SPENT:
      return setTimeSpent(state, payload);

    case RESET_TIME_SPENT:
      return resetTimeSpent(state, payload);

    default:
      return state;
  }
}

// GAME TIMER
function incrementGlobalTimer(state, value) {
  const { gameTimer } = state;

  return {
    ...state,
    gameTimer: gameTimer + value,
  };
}

function decrementGlobalTimer(state, value) {
  const { gameTimer } = state;

  return {
    ...state,
    gameTimer: gameTimer - value,
  };
}

function setGlobalTimerPeriod(state, gameTimer) {
  return {
    ...state,
    gameTimer,
  };
}

function setGlobalTimeSpent(state, payload) {
  const { gameTimer } = state;
  const { gameTimer: initialGameTimer} = initialState;

  const gameTimeSpent = (payload === 'increment')
    ? gameTimer - initialGameTimer
    : initialGameTimer - gameTimer;

  return {
    ...state,
    gameTimeSpent,
  };
}

function resetGlobalTimeSpent(state) {
  return {
    ...state,
    gameTimeSpent: 0,
  }
}

// LEVEL TIMER
function incrementTimer(state, value) {
  const { levelTimer } = state;

  return {
    ...state,
    levelTimer: levelTimer + value,
  };
}

function decrementTimer(state, value) {
  const { levelTimer } = state;

  return {
    ...state,
    levelTimer: levelTimer - value,
  };
}

function setTimerPeriod(state, levelTimer) {
  return {
    ...state,
    levelTimer,
  };
}

function setTimeSpent(state, payload) {
  const { levelTimer } = state;
  const { levelTimer: initialLevelTimer} = initialState;

  const levelTimeSpent = (payload === 'increment')
    ? levelTimer - initialLevelTimer
    : initialLevelTimer - levelTimer;

  return {
    ...state,
    levelTimeSpent,
  };
}

function resetTimeSpent(state) {
  return {
    ...state,
    levelTimeSpent: 0,
  }
}