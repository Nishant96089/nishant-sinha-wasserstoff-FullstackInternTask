import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import UnitToggle from "./components/UnitToggle";
import WeatherAnimation from "./components/WeatherAnimation";

function App() {
  const [city, setCity] = useState(""); // Stores the city name
  const [unit, setUnit] = useState("metric"); // Stores the unit of temperature
  const [weather, setWeather] = useState(null); // Stores current weather data
  const [forecast, setForecast] = useState([]); // Stores weather forecast data
  const [error, setError] = useState(""); // Stores error messages

  const apiKey = "735d39b1ff1f015a25d7ab2f3fbdc20b";

  // Fetches weather and forecast data when city or unit changes
  useEffect(() => {
    if (city) {
      fetchWeather(city, unit);
      fetchForecast(city, unit);
    }
  }, [city, unit]);

  // Fetches current weather data from the API
  const fetchWeather = async (city, unit) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
      );
      const data = response.data;
      setWeather({
        name: data.name,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
      setError("");
    } catch (error) {
      setError("City not found. Please try again.");
    }
  };

  // Fetches weather forecast data from the API
  const fetchForecast = async (city, unit) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
      );
      const data = response.data.list
        .filter((item, index) => index % 8 === 0) // Selects one forecast per day
        .map((item) => ({
          date: new Date(item.dt * 1000).toLocaleDateString(),
          temp: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));
      setForecast(data);
      setError("");
    } catch (error) {
      setError("Failed to fetch forecast. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="top">
        <span className="header-container">
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/glassmorphism/60/partly-cloudy-day.png"
            alt="partly-cloudy-day"
          />
          <h1 className="header">Weather Dashboard</h1>
        </span>
        <div className="search-toggle-container">
          <SearchBar onSearch={setCity} />
          <UnitToggle unit={unit} onToggle={setUnit} />
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      {weather ? (
        <>
          <WeatherDetails weather={weather} />
          {forecast.length > 0 && <Forecast forecast={forecast} />}
        </>
      ) : (
        <WeatherAnimation />
      )}
    </div>
  );
}

export default App;
