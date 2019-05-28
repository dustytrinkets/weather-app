import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import * as constWeather from '../../constants/weathers'
import './styles.css'

const data={
    temperature:5,
    state: constWeather.MOON,
    humidity: 10,
    wind:'20m/s'
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city="Madrid" ></Location>
        <WeatherData data={data}></WeatherData>
    </div>
    
)

export default WeatherLocation;