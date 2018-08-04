import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import GameButton from './GameButton';

import { alphabet } from '../utils/constants';

class PlayGame extends Component {
  renderGameButtons() {
    return alphabet.map(letter => {
      return <GameButton letter={letter} key={letter} />;
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">PlayGame</div>
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
    playerGuess: state.game.playerGuess
  };
}

export default connect(
  mapStateToProps,
  actions
)(PlayGame);
