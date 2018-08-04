import { SETUP_GAME, MAKE_GUESS, CHECK_FOR_ENDGAME } from './types';

export const setupGame = options => {
  return {
    type: SETUP_GAME,
    payload: options
  };
};

export const makeGuess = letterGuessed => {
  return {
    type: MAKE_GUESS,
    payload: letterGuessed
  };
};

export const checkForEndGame = () => {
  return {
    type: CHECK_FOR_ENDGAME,
    payload: null
  };
};
