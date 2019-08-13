export {
  gameIsLoading,
  setGameData,
  loadGame,
  setCurrentLevel,
  nextLevel,
  startGame,
  setCurrentAvatar,
  setShowEndGame,
  setShowQuestion,
} from './game/action';

export {
  startGlobalTimer,
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
  setTimeSpent,
  resetTimeSpent,
} from './timer/action';

export {
  playSound,
  stopSound,
  muteSound,
  toggleMuteSound,
  setSounds,
} from './sounds/action';

export {
  useHint,
  useSkip,
  incrementHints,
  decrementHints,
  decrementSkips,
  showHelpers,
  setHelpers,
} from './helper/action';


export {
  setVisibility,
  setType,
  setIsCorrect,
  setMessage,
  setFeedback,
} from './feedback/action';
