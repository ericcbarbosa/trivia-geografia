import { combineReducers } from 'redux';
import { gameReducer } from './game/reducer';
import { timerReducer } from './timer/reducer';
import { soundReducer } from './sounds/reducer';
import { helperReducer } from './helper/reducer';
import { feedbackReducer } from './feedback/reducer';

export const Reducers = combineReducers({
  game: gameReducer,
  timer: timerReducer,
  sounds: soundReducer,
  helper: helperReducer,
  feedback: feedbackReducer,
});