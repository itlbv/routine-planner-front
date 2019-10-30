import React from 'react';
import classes from './InRowButton.module.css';

const inRowButton = props => {

    const cls = [classes.inRowButton, classes[props.type]];

    return (
        <div onClick={props.clicked}
             className={cls.join(' ')}>
            {props.children}
        </div>
    );
};

export default inRowButton;