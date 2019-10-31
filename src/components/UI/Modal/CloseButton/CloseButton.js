import React from 'react';
import classes from './CloseButton.module.css';

const closeButton = props => (
    <button onClick={props.clicked} className={classes.close}/>
);

export default closeButton;