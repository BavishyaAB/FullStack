const Weather = ({ weatherData }) => {
  if(!weatherData || Object.keys(weatherData).length === 0) {
    return null; // Return null if no weather data is available
  }
  return (
    <>
        <div>
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature {weatherData.main.temp}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
    </>
  );
};

export default Weather;
