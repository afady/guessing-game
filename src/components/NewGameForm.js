import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import FormField from './FormField';
import { alpha, number, required } from '../utils/validationRules';

const formFields = [
  {
    label: 'Enter a word for your friend to guess:',
    name: 'wordToGuess',
    type: 'text'
  },
  {
    label: 'How many guesses do they get?',
    name: 'numberOfGuesses',
    type: 'number'
  }
];

class NewGameForm extends Component {
  componentWillMount() {
    this.props.initialize(this.props);
  }

  renderFields() {
    return formFields.map(({ label, name, type }) => {
      return (
        <div key={name} className="input-field col s12">
          <Field
            label={label}
            type={type}
            name={name}
            component={FormField}
            validate={[type === 'number' ? number : alpha, required]}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={this.props.handleSubmit(this.props.setupGame)}
        >
          <div className="row">{this.renderFields()}</div>
          <button type="submit" className="waves-effect waves-light btn-large">
            Start Game
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfGuesses: state.game.numberOfGuesses,
    wordToGuess: state.game.wordToGuess
  };
}

NewGameForm = connect(
  mapStateToProps,
  actions
)(NewGameForm);

export default reduxForm({
  form: 'gameForm'
})(NewGameForm);
