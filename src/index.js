import React from 'react';
import ReactDOM from 'react-dom';
import ParisDisplay from './ParisDisplay';

class App extends React.Component {

  render() {
    return(
      <ParisDisplay/>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
