import React, { useState, useEffect } from 'react';

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

// Användningsexempel:
// const fahrenheitTemp = 212; // Exempeltemperatur i Fahrenheit
// const celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
// console.log(celsiusTemp); 

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '3hSyXt2Z7lOuWiTdei742rCe4rVTGmKG'; // Replace with your AccuWeather API key
    const locationWeather = '315909'; // Replace with the location key of the desired location

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationWeather}?apikey=${API_KEY}&language=sv&details=false&metric=true`);
                if (response.ok) {
                    const data = await response.json();
                    setWeatherData(data);
                } else {
                    console.error('Failed to fetch weather data');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [locationWeather, API_KEY]);


	return (
        <div>
            <h1>Weather</h1>
            {weatherData && weatherData.Headline && (
                <div>
                    <h2>{weatherData.Headline.Text}</h2>
					<p>Minimum Temperature: {weatherData.DailyForecasts[0].Temperature.Minimum.Value}°C </p>
					<p>Maximum Temperature: {weatherData.DailyForecasts[0].Temperature.Maximum.Value}°C</p>
					{/* <p>Bunrise: {weatherData.DailyForecasts.Night.HoursOfRain}</p> */}
                </div>
            )}
        </div>
    );
};

export default Weather;
