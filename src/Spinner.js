import React from 'react';

const Spinner = props => {
  return(
    <div className="ui active transition visible dimmer">
      <div className="content">
        <div className="ui text loader">
          {props.message}
        </div>
      </div>
    </div>
  );
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;
