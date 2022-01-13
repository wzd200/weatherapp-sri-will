import React, { useState } from 'react';
import Conditions from '../Components/Conditions/Conditions';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city)

    function getForecast(e) {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
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
        .catch(err => {
            console.error(err);
        });
        e.preventDefault();
    }

    return (
       <div>
           <h2>Find Current Weather Conditions</h2>
           {/* <button onClick={getForecast}>Get Forecast</button> */}
           <form onSubmit={getForecast}>
               <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Farenheit
                </label>
                <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                <label>
                <button type="submit">Get Forecast</button>
                </label>
           </form>
           <Conditions responseObj={responseObj}/>
       </div>
    )
}

export default Forecast;