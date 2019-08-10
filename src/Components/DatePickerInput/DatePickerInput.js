import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import DatePickerUI from "./DatePickerUI";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = (props) => {
    return (
        <DatePicker
            dateFormat="dd-MM-yyyy"
            customInput={<DatePickerUI />}
            selected={props.dateValue}
            placeholderText={props.placeholder}
            name={props.name}
            id={props.id}
            onChange={date => props.onDateChage(date)} />
    )
}
DatePickerInput.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onDateChage: PropTypes.func,
    dateValue: PropTypes.object
};
export default DatePickerInput
