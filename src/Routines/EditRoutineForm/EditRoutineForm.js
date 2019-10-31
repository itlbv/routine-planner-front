import React from 'react';
import classes from './EditRoutineForm.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import EditFormButton from './EditFormButton/EditFormButton';

const editRoutineForm = props => {

    let editForm = <Spinner/>;
    if (props.routine !== null) {
        editForm = (
            <div className={classes.editRoutine}>
                <h2>{props.routine.name}</h2>
                <div>{props.routine.description}</div>
                <EditFormButton clicked={props.submitHandler} type={'continue'}>Continue</EditFormButton>
                <EditFormButton clicked={props.cancelHandler} type={'cancel'}>Cancel</EditFormButton>
            </div>
        );
    }

    return (
        editForm
    );
};

export default editRoutineForm;