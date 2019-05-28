import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import './styles.css'
import * as constWeather from '../../constants/weathers';

const WeatherLocation = () => {
    let data ={
        temperature: 30,
        state: constWeather.MOON,
        humidity:20,
        wind:'20m/s'

    }
    return (
    <div className="weatherLocationCont">
        <Location city="Madrid" ></Location>
        <WeatherData data={data}></WeatherData>
    </div>
    
)}

export default WeatherLocation;