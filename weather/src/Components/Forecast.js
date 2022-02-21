import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
       <div id='forecast' className='container'>
            <div className='circle'>
                <h1 className='application-title'>weather<br/><span className='drop'>drop</span></h1>
            </div>
            <div className='circle directions-circle'>
                <div className='inputs'>
                    <form onSubmit={getForecast}>
                        <input
                            className='form-control'
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
                        <label>
                            <input
                                    type="radio"
                                    name="units"
                                    checked={unit === "metric"}
                                    value="metric"
                                    onChange={(e) => setUnit(e.target.value)}
                            />
                            Celcius
                        </label>
                        <br/>
                        <button className='btn btn-primary' type="submit">Get Forecast</button>
                    </form>
                </div>
            </div>
            <Conditions
                    responseObj={responseObj}
                    error={error}
                    loading={loading}
                    unit={unit}/>
        </div>
    )
}

export default Forecast;