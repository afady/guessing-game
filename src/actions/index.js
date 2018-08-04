import { SETUP_GAME, MAKE_GUESS } from './types';

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
