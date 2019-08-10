import React, { Component } from 'react';
import { GlobalContext } from "../../Context/GlobalContext";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import './filterPanel.scss';

export class FilterPanel extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (({ clearDates, setFromDate, setToDate,fromDate,toDate }) => (
                        <div>
                            <div className="sticky-filter">
                                <span className="filterButton">Filter by</span>
                            </div>
                            <div className="doc-filter" >
                                <div className="filter-title">
                                    <span className="filter-text">Filter by</span>
                                    <span className="filter-text text-close">X</span>
                                </div>
                                <DatePickerInput id="fromDate"
                                    name="fromDate"
                                    placeholder="From"
                                    dateValue={fromDate}
                                    onDateChage={setFromDate} />
                                <DatePickerInput id="toDate"
                                    name="toDate"
                                    placeholder="To"
                                    dateValue={toDate}
                                    onDateChage={setToDate} />

                                <div className="filter-buttons">
                                    <button className="filter-apply primary">Apply filters</button>
                                    <button id="clearBtn" className="filter-apply orange"
                                        onClick={() => { clearDates() }}>Clear filters</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </GlobalContext.Consumer>
        )
    }
}

export default FilterPanel
