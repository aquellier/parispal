import React from 'react';


const getPlace = (lat, lng) => {
  if (48.81 < lat < 48.9 && 2.27 < lng < 2.41) {
    return "You are in Paris"
  } else {
    return "You are not in Paris"
  }
}

const ParisDisplay = props => {
  return getPlace(props.latitude, props.longitude);
}

export default ParisDisplay;
