import React from 'react';
import styled from 'styled-components';

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
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;