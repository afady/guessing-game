import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { alphabet } from '../utils/constants';
import LetterButton from './LetterButton';
import NewGameButton from './NewGameButton';

class GameScreen extends Component {
  componentWillMount() {
    this.wordToGuessArray = this.props.wordToGuess.split('');
  }

  renderLetterButtons() {
    const { makeGuess, lettersGuessed, checkForEndGame } = this.props;

    return alphabet.map(letter => {
      let hasBeenGuessed = lettersGuessed.indexOf(letter) >= 0;

      return (
        <LetterButton
          letter={letter}
          key={letter}
          makeGuess={makeGuess}
          checkForEndGame={checkForEndGame}
          disabled={hasBeenGuessed}
        />
      );
    });
  }

  renderWordTiles() {
    const { lettersGuessed } = this.props;
    console.log(this.wordToGuessArray);
    return this.wordToGuessArray.map((letter, index) => {
      // players do not have to guess spaces
      if (letter === ' ') {
        return (
          <a
            className="btn-large word-tile"
            key={index}
            style={{ visibility: 'hidden' }}
          >
            {letter}
          </a>
        );
      }

      let returnChar = letter;

      if (lettersGuessed.indexOf(letter) < 0) {
        returnChar = '_';
      }

      return (
        <a className="btn-large word-tile blue darken-2" key={index}>
          {returnChar}
        </a>
      );
    });
  }

  render() {
    const { numberOfGuesses } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <NewGameButton />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="word-tile-wrap">{this.renderWordTiles()}</div>
          </div>
        </div>
        <div className="row">
          <div className="col s12" style={{ textAlign: 'center' }}>
            <strong>Guesses left: </strong>
            <div className="btn">{numberOfGuesses}</div>
          </div>
        </div>
        <div className="row">{this.renderLetterButtons()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfGuesses: state.game.numberOfGuesses,
    wordToGuess: state.game.wordToGuess,
    lettersGuessed: state.game.lettersGuessed
  };
}

export default connect(
  mapStateToProps,
  actions
)(GameScreen);
