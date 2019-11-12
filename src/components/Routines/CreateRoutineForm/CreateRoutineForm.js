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
        this.setState({showDescriptionInput: true})
    };

    showEndDateHandler = () => {
        this.setState({showEndDateInput: true})
    };

    render() {

        let descriptionInput = <button className={classes.addInputButton}
                                       onClick={this.showDescriptionHandler}>add description</button>;
        if (this.state.showDescriptionInput) {
            descriptionInput = <TextInput name={'description'}
                                          placeholder={'Description:'}
                                          value={this.props.routine.description}
                                          onChange={this.props.inputHandler}/>
        }

        let endDateInput = <button className={classes.addInputButton}
                                   onClick={this.showEndDateHandler}>add end date</button>;
        if (this.state.showEndDateInput) {
            endDateInput = <DateInput name={'endDate'}
                                      placeholder={'End date:'}
                                      type={'date'}
                                      value={this.props.routine.endDate}
                                      onChange={this.props.inputHandler}/>
        }

        return (
            form
        );
    }
}

export default CreateRoutineForm;