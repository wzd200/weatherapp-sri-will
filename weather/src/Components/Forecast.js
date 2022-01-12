import React, { useState } from 'react';
import Conditions from '../Components/Conditions/Conditions';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "2d262fbfa4msh92c2df0d1e87162p13d87bjsn82d2e6ce542e"
	}
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
        // .then(response => {
        //     console.log(response);
        // })
        .catch(err => {
            console.error(err);
        });
    }

    return (
       <div>
           <h2>Find Current Weather Conditions</h2>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions responseObj={responseObj}/>
       </div>
    )
}

export default Forecast;