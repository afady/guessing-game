import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const NewGameButton = ({ startNewGame }) => {
  return (
    <button
      onClick={() => {
        startNewGame();
      }}
      className="waves-effect waves-light btn blue-grey"
    >
      New Game
    </button>
  );
};

export default connect(
  null,
  actions
)(NewGameButton);
