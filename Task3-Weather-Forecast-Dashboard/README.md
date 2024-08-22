# Weather Dashboard

## Overview

The Weather Dashboard is a React-based web application that provides users with real-time weather information and a 5-day weather forecast for any city. Utilizing the OpenWeatherMap API, this project offers a dynamic and interactive user experience with features such as unit conversion and visual weather representations.

👉 Live Demo: <a href='https://task3-weather-dashboard.netlify.app/'>Weather Dashboard</a>

![Weather Forecast Dashboard](https://github.com/Nishant96089/Task3-Weather-Forecast-Dashboard/blob/main/public/screenshot.png)


## Features

- **City Search:** Enter a city name to get current weather details and a 5-day forecast.
- **Current Weather:** Displays temperature, minimum and maximum temperatures, humidity, and wind speed.
- **5-Day Forecast:** Shows daily weather forecast with temperature, description, and icon.
- **Unit Toggle:** Switch between Celsius and Fahrenheit for temperature readings.
- **Error Handling:** Provides error messages if the city is not found or if there are issues with fetching data.

## Technologies

- **React:** For building the user interface.
- **Axios:** For making HTTP requests to the OpenWeatherMap API.
- **FontAwesome:** For weather icons and UI elements.
- **CSS:** For styling the application.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Nishant96089/Task3-Weather-Forecast-Dashboard.git

2. **Navigate to the Project Directory:**
   ```bash
   cd Task3-Weather-Forecast-Dashboard

3. **Install Dependencies:**
   ```bash
   npm install


## Configuration

1. **API Key:**

- Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
- Replace the apiKey variable in src/App.jsx with your API key.

## Usage

1. **Start the Development Server:**
   ```bash
   npm run dev

1. **Open Your Browser:**
- Navigate to `http://localhost:5173` to use the Weather Dashboard.

## File Structure

- `src/App.jsx`: Main component that manages state and handles API calls.
- `src/components/SearchBar.jsx`: Component for user input to search for cities.
- `src/components/WeatherDetails.jsx`: Displays current weather details.
- `src/components/Forecast.jsx`: Shows the 5-day weather forecast.
- `src/components/UnitToggle.jsx`: Allows toggling between Celsius and Fahrenheit.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/api) for providing the weather data.
- [FontAwesome](https://fontawesome.com/) for weather icons.
- React community for the inspiration and tools.

## Contact
For any questions or feedback, please reach out to nishantsinha96089@gmail.com

```sh
This `README.md` file should provide a comprehensive overview and guidance for your project. Make sure to update the placeholders with your actual repository URL, contact information, and any other specific details relevant to your project.


      
