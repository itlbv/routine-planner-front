import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import CloseButton from './CloseButton/CloseButton';

const modal = props => (
    <Aux>
        <Backdrop show={props.visible} clicked={props.hideModalHandler}/>
        <div className={classes.modal}
             style={{
                 opacity: props.visible ? '1' : '0',
                 transform: props.visible ? 'translate(-50%, -50%)' : 'translateY(-100vh)'
             }}>
            <CloseButton clicked={props.hideModalHandler}/>
            {props.children}
        </div>
    </Aux>
);

export default modal;