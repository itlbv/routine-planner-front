import React from 'react';
import classes from './InTableRowButton.module.css';

const inTableRowButton = props => {

    const cls = [classes.inRowButton, classes[props.type]];

    return (
        <button onClick={props.clicked}
                className={cls.join(' ')}>
            {props.children}
        </button>
    );
};

export default inTableRowButton;