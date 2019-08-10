import React, { Component } from "react";
import PropTypes from 'prop-types';
import Calendar from '../../img/calendar.png';
import Arrow from '../../img/arrow.png';
import "./datePickerUI.scss";

class DatePickerUI extends Component {
    render() {
        return (
            <div className="input-continer"
                onClick={this.props.onClick}>
                <img src={Calendar} alt="calendar icon" />
                <input type="text"
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange} />
                <img src={Arrow} alt="arrow icon" />
            </div>
        )
    }
}

DatePickerUI.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string
};

export default DatePickerUI