import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faTemperatureLow,
  faTemperatureHigh,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function WeatherDetails({ weather }) {
  // Returns the background image based on the weather description
  const getBackgroundImage = (description) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return "/images/clear-sky.jpg";
      case "few clouds":
        return "/images/few-clouds.jpg";
      case "scattered clouds":
        return "/images/scattered-clouds.jpg";
      case "broken clouds":
        return "/images/broken-clouds.jpg";
      case "shower rain":
        return "/images/shower-rain.jpg";
      case "light rain":
        return "/images/light-rain.jpg";
      case "moderate rain":
        return "/images/moderate-rain.jpg";
      case "rain":
        return "/images/rain.jpg";
      case "thunderstorm":
        return "/images/thunderstorm.jpg";
      case "overcast clouds":
        return "/images/overcast-clouds.jpg";
      case "snow":
        return "/images/snow.jpg";
      case "mist":
        return "/images/mist.jpg";
      case "haze":
        return "/images/haze.jpg";
      default:
        return "/images/default.jpg";
    }
  };

  // Determines the background image based on the current weather description
  const backgroundImage = getBackgroundImage(weather.description);

  return (
    <div className="weather-details">
      <div className="main-container">
        <div className="left">
          {/* Displays current temperature */}
          <p>
            <FontAwesomeIcon icon={faThermometerHalf} className="icon" />
            Current Temperature: {weather.temp}°
          </p>
          {/* Displays minimum temperature */}
          <p>
            <FontAwesomeIcon icon={faTemperatureLow} className="icon" /> Min
            Temp: {weather.temp_min}°
          </p>
          {/* Displays maximum temperature */}
          <p>
            <FontAwesomeIcon icon={faTemperatureHigh} className="icon" /> Max
            Temp: {weather.temp_max}°
          </p>
          {/* Displays humidity */}
          <p>
            <FontAwesomeIcon icon={faTint} className="icon" /> Humidity:{" "}
            {weather.humidity}%
          </p>
          {/* Displays wind speed and direction */}
          <p>
            <FontAwesomeIcon icon={faWind} className="icon" /> Wind:{" "}
            {weather.wind_speed} m/s, {weather.wind_deg}°
          </p>
        </div>
        <div
          className="right"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="city-name">{weather.name}</h2>
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt="Weather icon"
              className="weather-image"
            />
            <p className="weather-desc">{weather.description}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
