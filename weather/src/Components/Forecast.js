import React, { useState } from 'react';
import Conditions from '../Components/Conditions/Conditions';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
                // "x-rapidapi-key": process.env.REACT_APP_API_KEY
                // "x-rapidapi-key": "2d262fbfa4msh92c2df0d1e87162p13d87bjsn82d2e6ce542e"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObj(response)
            setLoading(false);
        })
        .catch(err => {
            console.error(err.message);
            setError(true);
            setLoading(false);
        });
        e.preventDefault();
        if (city.length === 0) {
            return setError(true); 
        }
        setError(false);
        setResponseObj({});
        setLoading(true);
    }

    return (
       <div>
           <h2>Find Current Weather Conditions</h2>
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
           <Conditions 
                responseObj={responseObj}
                error={error}
                loading={loading}/>
       </div>
    )
}

export default Forecast;