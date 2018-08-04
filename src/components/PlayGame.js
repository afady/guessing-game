import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PlayGame extends Component {
  componentWillMount() {}

  render() {
    return <div className="row">Play game</div>;
  }
}

function mapStateToProps(state) {
  return {
    numberOfGuesses: state.game.numberOfGuesses,
    wordToGuess: state.game.wordToGuess
  };
}

export default connect(
  mapStateToProps,
  actions
)(PlayGame);
