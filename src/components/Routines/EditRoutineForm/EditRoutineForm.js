import React from 'react';
import classes from './EditRoutineForm.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import FormButton from '../../UI/FormButton/FormButton';

const editRoutineForm = props => {

    let editForm = <Spinner/>;
    if (props.routine !== null) {
        editForm = (
            <div className={classes.editRoutine}>
                <h2>{props.routine.name}</h2>
                <div>{props.routine.description}</div>
                {console.log(props.routine)}
                <FormButton clicked={props.submitHandler} type={'success'}>Continue</FormButton>
                <FormButton clicked={props.cancelHandler} type={'cancel'}>Cancel</FormButton>
            </div>
        );
    }

    return (
        editForm
    );
};

export default editRoutineForm;