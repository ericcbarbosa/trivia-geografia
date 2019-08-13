import {
  PLAY_SOUND,
  STOP_SOUND,
  MUTE_SOUND,
  TOGGLE_MUTE_SOUND,
  SET_SOUNDS,
} from './types';

import initialState from './initialState';

export const soundReducer = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case PLAY_SOUND:
      return playSound(state, payload);

    case STOP_SOUND:
      return stopSound(state, payload);

    case MUTE_SOUND:
      return muteSound(state, payload);

    case TOGGLE_MUTE_SOUND:
      return toggleMuteSound(state, payload);

    case SET_SOUNDS:
      return setSounds(state, payload);

    default:
      return state;
  }
}

function playSound(state, soundToAdd) {
  const { playingSounds } = state;

  const newPlayingSounds = !playingSounds.find(soundItem => soundItem === soundToAdd)
      ? [ ...playingSounds, soundToAdd ]
      : playingSounds;

  return {
    ...state,
    playingSounds: newPlayingSounds,
  };
}

function stopSound(state, value) {
  const { playingSounds } = state;

  return {
    ...state,
    playingSounds: playingSounds.filter((item => item !== value)),
  };
}

function muteSound(state, muted) {
  return {
    ...state,
    muted,
  };
}

function toggleMuteSound(state) {
  return {
    ...state,
    muted: !state.muted,
  };
}

function setSounds(state, game) {
  const { sounds = {} } = game || {};

  return {
    ...state,
    sounds,
  };
}