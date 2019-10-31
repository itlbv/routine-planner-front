import React from 'react';
import classes from './EditFormButton.module.css';

const editFormButton = props => {

    const cls = [classes.editFormButton, classes[props.type]];

    return (
        <div onClick={props.clicked}
             className={cls.join(' ')}>
            {props.children}
        </div>
    );
};

export default editFormButton;