import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import * as constWeather from '../../../constants/weathers'

const sizeIcon = '4x';
const getWeatherIcon = state => {
    debugger;
    const icon = state
    if (icon){
        return  (<WeatherIcons className="wicon" name={icon} size={sizeIcon}/>)
    }
    return  (<WeatherIcons className="wicon" name={constWeather.SUN} size={sizeIcon}/>)

}

const WeatherTemperature = ({temperature, state}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(state)}
        <span className="temperatureNum">{`${temperature}`}</span>
        <span className="temperatureType">{`°C`}</span>
    </div>
    
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(Object.values(constWeather)).isRequired
}

export default WeatherTemperature;