import React from 'react';
import classes from './CreateButton.module.css';

const createButton = props => (
    <div className={classes.createButton}
         onClick={props.clicked}>
        {props.children}
    </div>
);

export default createButton;