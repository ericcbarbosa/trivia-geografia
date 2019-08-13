import {
  SET_VISIBILITY,
  SET_TYPE,
  SET_IS_CORRECT,
  SET_MESSAGE,
  SET_FEEDBACK,
} from './types';

export const setVisibility = (payload) => ({
  type: SET_VISIBILITY,
  payload,
});

// Hints
export const setType = (payload = 1) => ({
  type: SET_TYPE,
  payload,
});

export const setIsCorrect = (payload = 1) => ({
  type: SET_IS_CORRECT,
  payload,
});

export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});

export const setFeedback = (payload) => ({
  type: SET_FEEDBACK,
  payload,
});

export default {
  setVisibility,
  setType,
  setIsCorrect,
  setMessage,
  setFeedback,
};
