import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewGameForm from './NewGameForm';
import GameScreen from './GameScreen';

class App extends Component {
  renderScreen() {
    const { isPlaying, gameOver } = this.props;

    if (gameOver) {
      return <div>Game over!</div>;
    }

    if (isPlaying) {
      return <GameScreen />;
    }

    return <NewGameForm />;
  }

  render() {
    return <div className="container">{this.renderScreen()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.game.isPlaying,
    gameOver: state.game.gameOver,
    hasWinner: state.game.hasWinner
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
