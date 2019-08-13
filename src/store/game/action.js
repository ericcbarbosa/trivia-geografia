import {
  GAME_IS_LOADING,
  SET_GAME_DATA,
  SET_CURRENT_LEVEL,
  SET_DONE_LEVEL,
  SET_CURRENT_AVATAR,
  SET_SHOW_QUESTION,
  SET_SHOW_END_GAME,
 } from './types';

 import {
   startGlobalTimer,
   resetTimeSpent,
   startTimer,
   resetTimer,
   setHelpers,
   useHint,
} from '../actions';

import gameJson from '../../assets/game.json'

import { stopGlobalTimer } from '../timer/action';
import { setSounds } from '../sounds/action';

export const gameIsLoading = (payload) => ({
  type: GAME_IS_LOADING,
  payload,
});

export const setGameData = (payload) => ({
  type: SET_GAME_DATA,
  payload,
});

export const setCurrentLevel = (payload) => ({
  type: SET_CURRENT_LEVEL,
  payload,
});

export const setDoneLevel = (payload) => ({
  type: SET_DONE_LEVEL,
  payload,
});

export const setCurrentAvatar = (payload) => ({
    type: SET_CURRENT_AVATAR,
    payload,
});

export const setShowQuestion = (payload) => ({
    type: SET_SHOW_QUESTION,
    payload,
});

export const setShowEndGame = (payload) => ({
    type: SET_SHOW_END_GAME,
    payload,
});

// ASYNC
export const loadGame = () => {
  return (dispatch) => {
    dispatch(gameIsLoading(true));

    dispatch(setGameData(gameJson));
    dispatch(setHelpers(gameJson));
    dispatch(setSounds(gameJson));

    dispatch(setCurrentAvatar(1));
    dispatch(gameIsLoading(false));

    return Promise.resolve();

    /* return fetch('resources/game.json')
      .then(res => res.json())
      .then((res) => {
        dispatch(setGameData(res));
        dispatch(setHelpers(res));
        dispatch(setSounds(res));
        dispatch(setCurrentAvatar(1));
        dispatch(gameIsLoading(false));
      }); */
  };
};

export const startGame = () => {
  return (dispatch) => {
    dispatch(setCurrentLevel(0));

    setTimeout(() => {
      dispatch(startGlobalTimer());
      dispatch(nextLevel({ id: 0}));
    }, 3000);
  }
};

export const nextLevel = (payload) => {
  return (dispatch, getState) => {
    const { id } = payload || {};
    const { game } = getState() || {};
    const { levels } = game || {};

    // FIM DE JOGO
    if (id + 1 > levels.length) {
      dispatch(setDoneLevel(payload));
      dispatch(resetQuestion());
      dispatch(setShowQuestion(false));
      dispatch(endGame());
    }

    else if (id === 0) {
      dispatch(setCurrentLevel(1));
      dispatch(setShowQuestion(true));
      dispatch(startTimer('decrement'));
    }

    // PROXIMO DE NIVEL
    else {
      dispatch(setDoneLevel(payload));
      dispatch(resetQuestion());
      dispatch(setShowQuestion(false));
      dispatch(setCurrentLevel(id + 1));

      setTimeout(() => {
        dispatch(setShowQuestion(true));
        dispatch(startTimer('decrement'));
      }, 3000);
    }
  };
};

export const endGame = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(stopGlobalTimer());
      dispatch(setShowEndGame(true));
    }, 3000);
  }
};

export const resetQuestion = () => {
  return (dispatch) => {
    dispatch(resetTimer());
    dispatch(useHint(false));
    dispatch(resetTimeSpent());
  }
}

export default {
  gameIsLoading,
  setGameData,
  loadGame,
  nextLevel,
  setCurrentAvatar,
}