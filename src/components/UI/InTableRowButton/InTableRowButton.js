import React from 'react';
import classes from './InTableRowButton.module.css';

const inTableRowButton = props => {

    const cls = [classes.inRowButton, classes[props.type]];

    return (
        <div onClick={props.clicked}
             className={cls.join(' ')}>
            {props.children}
        </div>
    );
};

export default inTableRowButton;