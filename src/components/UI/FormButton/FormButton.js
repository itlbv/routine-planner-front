import React from 'react';
import classes from './FormButton.module.css';

const formButton = props => {

    const cls = [classes.formButton, classes[props.type]];

    return (
        <button className={cls.join(' ')}
                onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default formButton;