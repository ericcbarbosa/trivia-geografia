import {
  GAME_IS_LOADING,
  SET_GAME_DATA,
  SET_CURRENT_LEVEL,
  SET_DONE_LEVEL,
  SET_CURRENT_AVATAR,
  SET_SHOW_QUESTION,
  SET_SHOW_END_GAME
} from './types';

import initialState from './initialState';

export const gameReducer = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case SET_GAME_DATA:
      return setGameData(state, payload);

    case SET_CURRENT_LEVEL:
      return setCurrentLevel(state, payload);

    case GAME_IS_LOADING:
      return gameIsLoading(state, payload);

    case SET_DONE_LEVEL:
      return setDoneLevel(state, payload);

    case SET_CURRENT_AVATAR:
      return setCurrentAvatar(state, payload);

    case SET_SHOW_QUESTION:
      return setShowQuestion(state, payload);

    case SET_SHOW_END_GAME:
      return setShowEndGame(state, payload);

    default:
      return state;
  }
};

function gameIsLoading(state, loading) {
  return Object.assign({}, state, { ...Object.assign({}, state.game, { loading }) });
}

function setGameData(state, game = {}) {
  return Object.assign({}, state, game);
}

function setCurrentLevel(state, levelId = 1) {
  const { levels = [] } = state || {};

  const currentLevel = getSelectedLevel(levels, levelId);
  const mergedGame = Object.assign({}, state, { currentLevel });

  return Object.assign({}, state, mergedGame);
}


function setCurrentAvatar(state, avatarId = 1) {
  const { avatars = [] } = state || {};

  const currentAvatar = getCurrentAvatar(avatars, avatarId);
  return {
    ...state,
    currentAvatar: currentAvatar,
  };
}

function setShowQuestion(state, showQuestion) {
  return {
    ...state,
    showQuestion,
  }
}

function setShowEndGame(state, showEndGame) {
  return {
    ...state,
    showEndGame,
  }
}

function setDoneLevel(state, payload) {
  const { id, correct, selectedOptionId, spentTime } = payload || {};
  const { levels = [] } = state || {};

  const doneLevels = levels.map(level => {
    if (level.id === id) {
      const { question } = level || {};
      const { options = [] } = question || {};

      const selectedOption = options.find(option => option.id === selectedOptionId);

      return {
        ...level,
        done: true,
        correct,
        selectedOption,
        spentTime,
      };
    }

    else {
      return level;
    }
  });

  return {
    ...state,
    levels: doneLevels,
  };
}

// Helpers
function getSelectedLevel(levels, levelId) {
  const getLevel = levels.find(level => level.id === levelId);

  return getLevel ? getLevel : null;
}

function getCurrentAvatar(avatars, avatarId) {
  const getAvatar = avatars.find(avatar => avatar.id === avatarId);

  return getAvatar ? getAvatar : null;
}