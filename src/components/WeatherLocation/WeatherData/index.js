import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import * as constWeather from '../../../constants/weathers'
import './styles.css'

const WeatherData = ({data}) => {
    const {temperature, state, humidity, wind} = data;
    debugger;

    return (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={20} state={constWeather.SUN} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>

)}

export default WeatherData;