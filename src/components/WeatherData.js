import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';



const WeatherData = () =>(
    <div>
       <WeatherTemperature temperature="20" state=""/>
       <WeatherExtraInfo humidity="18" wind="10m/s"/>
    </div>

)

export default WeatherData;