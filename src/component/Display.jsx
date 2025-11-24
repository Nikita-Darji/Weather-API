import React from "react";

const Display = ({ weather, setweather,error }) => {
    
    return (
        <div className="weather-card">

            {error && (
                <p className="card-wrapper">{error}</p>
            )

            }
                 {weather && (
                <div className="card-wrapper">
                    <h2>City Name: {weather.name}</h2>
                    <h3>City Temperature{weather.main.temp}°C</h3>
                    <p>Discription:{weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                </div>
            )}

            </div>
    )
}

export default Display