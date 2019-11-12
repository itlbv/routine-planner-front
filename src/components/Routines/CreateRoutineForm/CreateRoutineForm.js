import React, {Component} from 'react';
import classes from './CreateRoutineForm.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import TextInput from './TextInput/TextInput';
import DateInput from './DateInput/DateInput';
import FormButton from '../../UI/FormButton/FormButton';

class CreateRoutineForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescriptionInput: false,
            showEndDateInput: false
        };
    }

    showDescriptionHandler = () => {
        this.setState({showDescription: true})
    };

    showEndDateHandler = () => {
        this.setState({showEndDate: true})
    };

    render() {

        let showDescription = this.state.showDescription;
        let descriptionInput = <button className={classes.addInputButton}
                                       onClick={this.showDescriptionHandler}>add description</button>;
        if (this.props.routine !== null && this.props.routine.description !== '') {
            showDescription = true;
        }
        if (showDescription) {
            descriptionInput = <TextInput name={'description'}
                                          placeholder={'Description:'}
                                          value={this.props.routine.description}
                                          onChange={this.props.inputHandler}/>
        }


        let showEndDate = this.state.showEndDate;
        let endDateInput = <button className={classes.addInputButton}
                                   onClick={this.showEndDateHandler}>add end date</button>;
        if (this.props.routine !== null && this.props.routine.endDate !== null) {
            showEndDate = true;
        }
        if (showEndDate) {
            endDateInput = <DateInput name={'endDate'}
                                      placeholder={'End date:'}
                                      type={'date'}
                                      value={this.props.routine.endDate}
                                      onChange={this.props.inputHandler}/>
        }


        let form = <Spinner/>;
        if (this.props.routine !== null) {
            form = <form className={classes.createRoutineForm}>
                <TextInput name={'name'}
                           placeholder={'Title:'}
                           value={this.props.routine.name}
                           onChange={this.props.inputHandler}/>

                <DateInput name={'timeOfDay'}
                           placeholder={'Time of day:'}
                           type={'time'}
                           value={this.props.routine.timeOfDay}
                           onChange={this.props.inputHandler}/>
                {endDateInput}
                {descriptionInput}

                <div className={classes.submitButtons}>
                    <FormButton clicked={this.props.submitHandler}
                                type={'success'}>Create</FormButton>
                    <FormButton clicked={this.props.cancelHandler}
                                type={'cancel'}>Cancel</FormButton>
                </div>
            </form>
        }

        return (
            form
        );
    }
}

export default CreateRoutineForm;