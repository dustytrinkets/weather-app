import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog"
}
const getWeatherIcon = state => {
    const icon = icons[state]
    if (icon)
        return  (<WeatherIcons name={icon} size="1x"/>)
    else 
        return  (<WeatherIcons name="day-fog" size="1x"/>)
}

const WeatherTemperature = ({temperature, state}) => (
    <div>
        {getWeatherIcon(state)}
        <span>{` ${temperature}°C `}</span>
    </div>
    
)

export default WeatherTemperature;