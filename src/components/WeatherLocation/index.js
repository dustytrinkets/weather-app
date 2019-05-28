import React, { Component } from 'react';
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

class WeatherLocation extends Component {

    constructor(){
        super();
        this.constWeather = constWeather;
        this.state = {
            city: 'Londres',
            data: data,
        }
    }

    handleUpdateClick=()=>{
        // this.setState(() => {
        //     return {city: 'Madrid'};
        //   });

        this.setState({city:'Madrid', data: {
            temperature:10,
            state: this.constWeather.RAIN,
            humidity: 20,
            wind:'20m/s'
        }})
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