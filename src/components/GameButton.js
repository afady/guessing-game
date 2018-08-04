import React from 'react';

export default ({ letter, makeGuess }) => {
  return (
    <div className="col s3 m2 l1">
      <button
        onClick={() => {
          makeGuess(letter);
        }}
        className="waves-effect waves-light btn blue-grey"
        style={{ margin: '0 22px 22px 0', width: '100%' }}
      >
        {letter}
      </button>
    </div>
  );
};
