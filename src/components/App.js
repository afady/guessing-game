import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewGameForm from './NewGameForm';
import PlayGame from './PlayGame';

class App extends Component {
  renderScreen() {
    if (this.props.isPlaying) {
      return <PlayGame />;
    }

    return <NewGameForm />;
  }
  render() {
    return <div className="container">{this.renderScreen()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.game.isPlaying
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
