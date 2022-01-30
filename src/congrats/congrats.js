import React from "react";
import PropTypes from 'prop-types';

/**
 * @function 
 * @param {object} props
 * @returns {JSX.Element}
 */

const Congrats = (props) => {
    if(props.success){
    return(
        <div data-test="component-congrats">
            <span data-test="congrats-message"> Congratulation! You won</span>
        </div>
    )
    } else {
        return(
            <div data-test="component-congrats">
            </div>
        )  
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;