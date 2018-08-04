import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import GameButton from './GameButton';

import { alphabet } from '../utils/constants';

class GameScreen extends Component {
  componentWillMount() {
    this.wordToGuessArray = this.props.wordToGuess.split('');
  }

  renderGameButtons() {
    const { makeGuess, lettersGuessed } = this.props;

    return alphabet.map(letter => {
      let hasBeenGuessed = lettersGuessed.indexOf(letter) >= 0;

      return (
        <GameButton
          letter={letter}
          key={letter}
          makeGuess={makeGuess}
          disabled={hasBeenGuessed}
        />
      );
    });
  }

  renderWordTiles() {
    const { lettersGuessed } = this.props;

    return this.wordToGuessArray.map((letter, index) => {
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
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="word-tile-wrap">{this.renderWordTiles()}</div>
          </div>
        </div>
        <div className="row">{this.renderGameButtons()}</div>
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
