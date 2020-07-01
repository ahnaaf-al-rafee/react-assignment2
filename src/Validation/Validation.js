import React from 'react';

const Validation = (props) => {
    return(
        <div>
            {props.inputLength < 5 ? 
            <p>Text too short!</p>:
            props.inputLength > 10?
            <p>Text is so long!</p>:
            <p>Text length is perfect!</p>
        }
        </div>
    )
}

export default Validation;