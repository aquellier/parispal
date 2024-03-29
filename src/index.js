import React from 'react';
import ReactDOM from 'react-dom';
import ParisDisplay from './ParisDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  state = { lat: null, lng: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <ParisDisplay latitude={this.state.lat} longitude={this.state.lng}/>
    }

    return <div><Spinner/></div>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
