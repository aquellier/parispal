import React from 'react';
import ReactDOM from 'react-dom';
import ParisDisplay from './ParisDisplay';

class App extends React.Component {

  state = { lat: null, lng: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return(
      <ParisDisplay
        latitude={this.state.lat}
        longitude={this.state.lng}
      />
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

// this.setState({lat: position.coords.latitude})
