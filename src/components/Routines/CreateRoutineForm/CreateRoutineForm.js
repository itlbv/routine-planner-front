import React, {Component} from 'react';
import classes from './CreateRoutineForm.module.css';
import TextInput from './TextInput/TextInput';
import DateInput from './DateInput/DateInput';
import FormButton from '../../UI/FormButton/FormButton';

class CreateRoutineForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routine: {
                name: '',
                description: '',
                startDate: new Date(),
                endDate: null,
                timeOfDay: new Date(),
                period: 'P2D'
            },
            showDescriptionInput: false,
            showEndDateInput: false
        };

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler = (name, value) => {
        const routine = {...this.state.routine};
        routine[name] = value;
        this.setState({
            routine: routine
        });
    };

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
                                          value={this.state.routine.description}
                                          onChange={this.inputChangeHandler}/>
        }

        let endDateInput = <button className={classes.addInputButton}
                                   onClick={this.showEndDateHandler}>add end date</button>;
        if (this.state.showEndDateInput) {
            endDateInput = <DateInput name={'endDate'}
                                      placeholder={'End date:'}
                                      type={'date'}
                                      value={this.state.routine.endDate}
                                      onChange={this.inputChangeHandler}/>
        }

        return (
            <form className={classes.createRoutineForm}>
                <TextInput name={'name'}
                           placeholder={'Title:'}
                           value={this.state.routine.name}
                           onChange={this.inputChangeHandler}/>
                {descriptionInput}
                <DateInput name={'timeOfDay'}
                           placeholder={'Time:'}
                           type={'time'}
                           value={this.state.routine.timeOfDay}
                           onChange={this.inputChangeHandler}/>
                {endDateInput}

                <div className={classes.submitButtons}>
                    <FormButton clicked={() => this.props.submitHandler(this.state.routine)}
                                type={'success'}>Create</FormButton>
                    <FormButton clicked={this.props.cancelHandler}
                                type={'cancel'}>Cancel</FormButton>
                </div>

            </form>
        );
    }
}

export default CreateRoutineForm;