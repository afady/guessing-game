import { SETUP_GAME } from './types';

export const setupGame = options => {
  return {
    type: SETUP_GAME,
    payload: options
  };
};
