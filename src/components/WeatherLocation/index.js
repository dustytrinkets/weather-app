import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import * as constWeather from '../../constants/weathers'
import './styles.css'

//Open weather map API
const URL_BASE = 'http://api.openweathermap.org/data/2.5/weather'
const LOCATION = 'Madrid,es';
const API_KEY = '248bef42a9ab2ca58fc0ec7d606f2ae5';

const ApiWeather = `${URL_BASE}?q=${LOCATION}&appid=${API_KEY}&units=metric`;

const data={
    temperature:5,
    state: constWeather.MOON,
    humidity: 10,
    wind:'20m/s'
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.constWeather = constWeather;
        this.state = {
            city: 'Londres',
            data: data,
        }
    }

    getWeatherState = (weatherData) => {
        return 'snow'
    }

    getData = (weatherData) =>{
        const {humidity, temp} = weatherData.main
        const {speed} = weatherData.wind
        const name = weatherData.name;
        const state = this.getWeatherState(weatherData);
        let data= {
            city: name, 
            data: { 
                temperature: temp,
                state: state,
                humidity: humidity,
                wind:`${speed}m/s`
            }
        }
        return data;

    }

    handleUpdateClick=()=>{
        fetch(ApiWeather)
            .then(
                (response)=> {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then((data) => {
                    const newData = this.getData(data)
                    this.setState(newData)
                });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error: ', err);
            });
    }
    
    render(){
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} ></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
    
    
}


export default WeatherLocation;