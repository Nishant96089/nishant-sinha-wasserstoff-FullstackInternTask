import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faSun } from '@fortawesome/free-solid-svg-icons';

function UnitToggle({ unit, onToggle }) {
  return (
    <div className='toggle-container'>
      {/* Button to select Celsius as the temperature unit */}
      <button 
        className={unit === 'metric' ? 'active' : ''} 
        onClick={() => onToggle('metric')}
      >
        <FontAwesomeIcon icon={faThermometerHalf} /> Celsius
      </button>
      {/* Button to select Fahrenheit as the temperature unit */}
      <button 
        className={unit === 'imperial' ? 'active' : ''} 
        onClick={() => onToggle('imperial')}
      >
        <FontAwesomeIcon icon={faSun} /> Fahrenheit
      </button>
    </div>
  );
}

export default UnitToggle;
