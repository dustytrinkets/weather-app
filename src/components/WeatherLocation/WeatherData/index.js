import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import * as constWeather from '../../../constants/weathers';
import './styles.css'

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={20} state={constWeather.SNOW} />
        <WeatherExtraInfo humidity={18} wind="10m/s" />
    </div>

)

export default WeatherData;