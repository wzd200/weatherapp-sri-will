import './App.css';
import React, {useState, useEffect} from "react";
// import Card from './Components/Card';
import axios from 'axios';
import Forecast from './Components/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState([]) //code Will added

  useEffect(() => { //code Will added
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '2d262fbfa4msh92c2df0d1e87162p13d87bjsn82d2e6ce542e'
      }
    };
    
    const fetchWeatherData = () => {//code Will added
      axios.request(options).then(function (response) {
      console.log(response.data);
      setWeatherData(response.data); //code Will added
    }).catch(function (error) {
      console.error(error);
    });
    }

    fetchWeatherData() //code Will added

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Forecast/>
        
      </header>
    </div>
  );
}

export default App;
