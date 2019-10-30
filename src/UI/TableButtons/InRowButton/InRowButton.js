import React from 'react';
import classes from './InRowButton.module.css';

const inRowButton = props => (
    <div className={classes.inRowButton}>
        {props.children}
    </div>
);

export default inRowButton;