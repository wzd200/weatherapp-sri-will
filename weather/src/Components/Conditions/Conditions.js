import React from 'react';
import styled from 'styled-components';
import clearSky from '../../Images/chris-barbalis-67-CqTBwNI0-unsplash.jpg';

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
                    <img src={clearSky} class='card-img-top' alt='clear sky'></img>
                    <h3 className='card-title py-3'><strong>{props.responseObj.name}</strong></h3>
                    <p className='card-text mb-2'>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;