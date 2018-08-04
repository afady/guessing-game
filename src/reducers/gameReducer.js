import { SETUP_GAME, MAKE_GUESS } from '../actions/types';

const initialState = {
  wordToGuess: '',
  numberOfGuesses: 6,
  isPlaying: false,
  lettersGuessed: ['']
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETUP_GAME:
      return {
        ...state,
        wordToGuess: action.payload.wordToGuess.trim().toUpperCase(),
        numberOfGuesses: action.payload.numberOfGuesses,
        isPlaying: true
      };

    case MAKE_GUESS:
      return {
        ...state,
        lettersGuessed: [...state.lettersGuessed, action.payload],
        numberOfGuesses: state.numberOfGuesses - 1
      };

    default:
      return state;
  }
}
