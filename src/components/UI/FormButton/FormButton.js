import React from 'react';
import classes from './FormButton.module.css';

const formButton = props => {

    const cls = [classes.formButton, classes[props.type]];

    return (
        <div onClick={props.clicked}
             className={cls.join(' ')}>
            {props.children}
        </div>
    );
};

export default formButton;