import React from 'react';
import NewGameButton from './NewGameButton';

export default props => {
  const { isPlaying } = props;

  return (
    <nav>
      <div className="nav-wrapper container">
        <span className="brand-logo">Guess!</span>
        {isPlaying ? <NewGameButton /> : ''}
      </div>
    </nav>
  );
};
