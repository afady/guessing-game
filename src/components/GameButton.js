import React from 'react';

export default ({ letter, makeGuess, disabled }) => {
  return (
    <div className="col s3 m2 l1">
      <button
        onClick={() => {
          makeGuess(letter);
        }}
        className="waves-effect waves-light btn blue-grey letter-btn"
        disabled={disabled}
      >
        {letter}
      </button>
    </div>
  );
};
