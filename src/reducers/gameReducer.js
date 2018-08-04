import { SETUP_GAME } from '../actions/types';

const initialState = {
  wordToGuess: '',
  numberOfGuesses: 6,
  isPlaying: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETUP_GAME:
      return {
        wordToGuess: action.payload.wordToGuess,
        numberOfGuesses: action.payload.numberOfGuesses,
        isPlaying: true
      };
    default:
      return state;
  }
}
