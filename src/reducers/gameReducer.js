import { SETUP_GAME } from '../actions/types';

const initialState = {
  wordToGuess: 'TEST',
  numberOfGuesses: 6,
  isPlaying: true,
  playerGuess: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETUP_GAME:
      return {
        wordToGuess: action.payload.wordToGuess.trim(),
        numberOfGuesses: action.payload.numberOfGuesses,
        isPlaying: true
      };
    default:
      return state;
  }
}
