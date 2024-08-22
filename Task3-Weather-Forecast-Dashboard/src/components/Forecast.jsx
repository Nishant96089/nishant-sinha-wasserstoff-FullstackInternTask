import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf, faTemperatureLow, faTemperatureHigh, faTint, faWind } from "@fortawesome/free-solid-svg-icons";

// Function to determine the background image based on weather description
function getBackgroundImage(description) {
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
    case "snow":
      return "/images/snow.jpg";
    case "mist":
      return "/images/mist.jpg";
    case "haze":
      return "/images/haze.jpg";
    case "overcast clouds":
      return "/images/overcast-clouds.jpg";
    default:
      return "/images/default.jpg";
  }
}

function Forecast({ forecast }) {
  return (
    <div>
      {/* Heading for the 5-day forecast section */}
      <h3 className="forecast-heading">5-Day Forecast</h3>
      <div className="forecast-grid">
        {/* Mapping through the forecast data to display each day's forecast */}
        {forecast.map((day, index) => (
          <div
            key={index}
            className="forecast-day"
            style={{
              // Applying the background image based on the weather description
              backgroundImage: `url(${getBackgroundImage(day.description)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Displaying the date, temperature, weather description, and weather icon */}
            <p>{day.date}</p>
            <p>Temp: {day.temp}°</p>
            <p>{day.description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
              alt="Weather icon"
              className="forecast-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
