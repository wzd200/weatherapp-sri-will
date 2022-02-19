import React from 'react';
import styled from 'styled-components';
import clearSky from '../../Images/chris-barbalis-67-CqTBwNI0-unsplash.jpg';
import overcastClouds from '../../Images/nathan-anderson-aAMX9r3KGbM-unsplash.jpg';
import mist from '../../Images/jan-huber-dMJLwMh8n8w-unsplash.jpg';
import brokenClouds from '../../Images/corey-serravite-KlEbzGLvgLI-unsplash.jpg';
import scatteredClouds from '../../Images/marco-bianchetti-DJqJy3k1mCA-unsplash.jpg';
import fewClouds from '../../Images/pau-sayrol-ylKXETbBb3M-unsplash.jpg';
import lightRain from '../../Images/hafidh-satyanto-UytSb_a2YE0-unsplash.jpg';

const StyledError = styled.div`
    color: crimson;
`
const Conditions = (props) => {
    return (
        <div>
            <div>
                </div>
            {props.error && <StyledError>Please enter a valid city.</StyledError>}
            {props.loading && <div>Loading...</div>}
            {props.responseObj.cod === 200 ?
                <div className='card'>
                    {/* <img src={clearSky} class='card-img-top' alt='clear sky'></img> */}
                    {props.responseObj.weather[0].description === 'clear sky' ?
                        <img src={clearSky} class='card-img-top' alt='clear sky'></img>
                        : null
                    }
                    {props.responseObj.weather[0].description === 'overcast clouds' ?
                        <img src={overcastClouds} class='card-img-top' alt='overcast clouds'></img>
                        : null
                    }
                    {props.responseObj.weather[0].description === 'mist' ?
                        <img src={mist} class='card-img-top' alt='mist'></img>
                        : null
                    }
                    {props.responseObj.weather[0].description === 'broken clouds' ?
                        <img src={brokenClouds} class='card-img-top' alt='broken clouds'></img>
                        : null
                    }
                    {props.responseObj.weather[0].description === 'scattered clouds' ?
                        <img src={scatteredClouds} class='card-img-top' alt='scattered clouds'></img>
                        : null
                    }
                    {props.responseObj.weather[0].description === 'few clouds' ?
                        <img src={fewClouds} class='card-img-top' alt='few clouds'></img>
                        : null
                    }
                    {props.responseObj.weather[0].description === 'light rain' ?
                        <img src={lightRain} class='card-img-top' alt='light rain'></img>
                        : null
                    }
                    
                    <h3 className='card-title py-3'><strong>{props.responseObj.name}</strong></h3>
                    <div className='row'>
                        <p className='card-text mb-1 col-6'>{Math.round(props.responseObj.main.temp)} degrees</p>
                        <p className='card-text sky-type col-6'>{props.responseObj.weather[0].description}</p>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;