import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import classes from './DateInput.module.css';
import './datepicker-custom-style.css';

const dateInput = props => {

    let selectTimeOnly = false;
    let inputFormatString = 'yyyy-MM-dd';
    if (props.type === 'time') {
        selectTimeOnly = true;
        inputFormatString = 'HH:mm';
    }

    return (
        <div className={classes.dateInput}>
            <div>
                <DatePicker selected={props.value}
                            onChange={date => props.onChange(props.name, date)}
                            showTimeSelect={selectTimeOnly}
                            showTimeSelectOnly={selectTimeOnly}
                            dateFormat={inputFormatString}
                            placeholderText={props.placeholder}/>
            </div>
        </div>
    );
};

export default dateInput;