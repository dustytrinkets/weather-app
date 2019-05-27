import React from 'react';

const Location = (props)  =>{
    //destructuracion de objetos de es6:
    const { city } = props; // == const city = props.city
    return (
    <div>
        <h1>
            {city}
        </h1>
    </div>
    )
}



export default Location;