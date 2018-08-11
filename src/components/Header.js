import React from 'react';
import NewGameButton from './NewGameButton';

export default props => {
  const { isPlaying } = props;

  return (
    <nav>
      <div className="nav-wrapper container">
        <span className="brand-logo">Guessing Game</span>
        {isPlaying ? <NewGameButton /> : ''}
      </div>
    </nav>
  );
};
