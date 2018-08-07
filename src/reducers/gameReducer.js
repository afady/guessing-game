import {
  SETUP_GAME,
  MAKE_GUESS,
  CHECK_FOR_ENDGAME,
  START_NEW_GAME
} from '../actions/types';

const initialState = {
  wordToGuess: '',
  numberOfGuesses: 6,
  isPlaying: false,
  hasWinner: false,
  gameOver: false,
  lettersGuessed: ['']
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETUP_GAME: {
      return {
        ...state,
        wordToGuess: action.payload.wordToGuess.trim().toUpperCase(),
        numberOfGuesses: action.payload.numberOfGuesses,
        isPlaying: true
      };
    }

    case MAKE_GUESS: {
      const letter = action.payload;
      const { wordToGuess } = state;

      let { numberOfGuesses } = state;

      // if guess was incorrect, decrement number of guesses
      if (wordToGuess.split('').indexOf(letter) < 0) {
        numberOfGuesses--;
      }

      return {
        ...state,
        lettersGuessed: [...state.lettersGuessed, letter],
        numberOfGuesses
      };
    }

    case CHECK_FOR_ENDGAME: {
      const { lettersGuessed, wordToGuess, numberOfGuesses } = state;

      let hasWinner = true;

      wordToGuess.split('').map(letter => {
        if (letter !== ' ' && lettersGuessed.indexOf(letter) < 0) {
          hasWinner = false;
        }

        return null;
      });

      const gameOver = hasWinner || numberOfGuesses <= 0;

      return {
        ...state,
        hasWinner,
        gameOver
      };
    }

    case START_NEW_GAME: {
      return initialState;
    }

    default:
      return state;
  }
}
