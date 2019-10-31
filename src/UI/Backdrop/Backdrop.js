import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props => (
    props.show ? <div onClick={props.clicked} className={classes.backdrop}/> : null
);

export default backdrop;