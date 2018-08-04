import React from 'react';

export default props => {
  return (
    <div className="col s3">
      <a
        className="waves-effect waves-light btn-large"
        style={{ margin: '0 10px 10px 0', width: 72 }}
      >
        {props.letter}
      </a>
    </div>
  );
};
