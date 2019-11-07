import React from 'react';
import classes from './TextInput.module.css';

const textInput = props => (
    <div className={classes.textInput}>
        <input type="text"
               placeholder={props.placeholder}
               onChange={event => props.onChange(props.name, event.target.value.trim())}
               value={props.value}/>
    </div>
);

export default textInput;