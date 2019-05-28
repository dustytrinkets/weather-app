import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css'

const WeatherData = ({data}) => {
    const {temperature, state, humidity, wind} = data;
    return (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} state={state} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>

)}

export default WeatherData;