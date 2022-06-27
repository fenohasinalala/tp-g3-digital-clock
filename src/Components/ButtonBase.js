import React from 'react';
import './ButtonBase.css'

const ButtonBase = (props) => {
    let defComponent    = props.defComponent;
    let defClass        = props.defClass;
    let defFunction     = props.defFunction;
    return (
        <button id="bouton" className={defClass} onClick={defFunction}>
            {defComponent}
        </button>
    );
};

export default ButtonBase;