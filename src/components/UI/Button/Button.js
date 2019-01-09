import React from 'react';
import classes from './Button.css';

const button = (props) => (

    <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.children}>
        {props.clicked}
    </button>
);

export default button;