import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import * as constWeather from '../../../constants/weathers'

import './styles.css'

const WeatherData = ({data: {temperature, state, humidity, wind}}) => {
    // const {temperature, state, humidity, wind} = data;
    return (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} state={state} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>

)}


WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        state: PropTypes.oneOf(Object.values(constWeather)).isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired
    }),
}


export default WeatherData;