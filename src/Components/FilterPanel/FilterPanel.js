import React, { Component } from 'react';
import { GlobalContext } from "../../Context/GlobalContext";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import './filterPanel.scss';

export class FilterPanel extends Component {
    static contextType = GlobalContext;

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    applyFilter = (fromDate, toDate) => {
        if (fromDate === null) {
            alert("From date missing");
            return;
        }
        if (toDate === null) {
            alert("To date missing");
            return;
        }
        let firstDate = new Date(fromDate);
        let secondDate = new Date(toDate);
        if (firstDate.getTime() - secondDate.getTime() > 0) {
            alert("From date must before To date");
            return;
        }
        this.context.applyFilter(fromDate, toDate);
    }

    toggolFilter = (show) => {
        this.setState({
            isOpen: show
        })
    }
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (({ clearFilter, setFromDate, setToDate, fromDate, toDate }) => (
                        <div>
                            <div className="sticky-filter" onClick={() => { this.toggolFilter(true) }}>
                                <span className="filterButton">Filter by</span>
                            </div>
                            <div className={"doc-filter " + (this.state.isOpen ? '' : 'filter-close')} >
                                <div className="filter-title">
                                    <span className="filter-text">Filter by</span>
                                    <span className="filter-text text-close" onClick={() => { this.toggolFilter(false) }}>X</span>
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
                                    <button className="filter-apply primary"
                                        onClick={() => { this.applyFilter(fromDate, toDate) }}>Apply filters</button>
                                    <button id="clearBtn" className="filter-apply orange"
                                        onClick={() => { clearFilter() }}>Clear filters</button>
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
