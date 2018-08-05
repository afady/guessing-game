import React from 'react';

export default ({ startNewGame }) => {
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
