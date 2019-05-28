import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css'


const WeatherData = ({data}) => {
    
    return (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={data.temperature} state={data.state} />
        <WeatherExtraInfo humidity={data.humidity} wind={data.wind} />
    </div>

    )
}

export default WeatherData;