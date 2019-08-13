import {
  PLAY_SOUND,
  STOP_SOUND,
  MUTE_SOUND,
  TOGGLE_MUTE_SOUND,
  SET_SOUNDS,
} from './types';

// GAME TIMER
export const playSound = (payload = null) => ({
  type: PLAY_SOUND,
  payload,
});

export const stopSound = (payload = null) => ({
  type: STOP_SOUND,
  payload,
});

export const muteSound = (payload = false) => ({
  type: MUTE_SOUND,
  payload,
});

export const toggleMuteSound = (payload = false) => ({
  type: TOGGLE_MUTE_SOUND,
  payload,
});

export const setSounds = (payload = {}) => ({
  type: SET_SOUNDS,
  payload,
});

export default {
  playSound,
  stopSound,
  muteSound,
  toggleMuteSound,
  setSounds,
};
