import React from 'react';
import './ParisDisplay.css';

const placeConfig = {
  'paris': {
    text: 'You are in Paris',
    iconName: 'thumbs up'
  },
  'elsewhere': {
    text: 'You are not in Paris',
    iconName: 'thumbs down'
  }
}

const getPlace = (lat, lng) => {
  if (48.81 < lat && lat > 48.9 && 2.27 < lng && lng > 2.41) {
    return "paris";
  } else {
    return "elsewhere";
  }
}

const ParisDisplay = props => {
  const place = getPlace(props.latitude, props.longitude);
  const { text, iconName } = placeConfig[place];
  return (
    <div>
      <i className={`icon ${iconName} massive icon-left` }></i>
      <h1>{text}</h1>
      <i className={`icon ${iconName} massive icon-right` }></i>
    </div>
  );
}

export default ParisDisplay;
