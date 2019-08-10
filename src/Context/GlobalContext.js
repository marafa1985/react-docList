import React, { Component } from "react";

export const GlobalContext = React.createContext({
    fromDate: Date,
    toDate: Date,
    setFromDate: () => { },
    clearDates: () => { },
    getToDate: () => { },
    setToDate: () => { }
});

export class GlobalContextProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fromDate: null,
            toDate: null,
            setFromDate: (fromDate) => {
                console.log(fromDate);
                this.setState({ fromDate });
            },
            setToDate: (toDate) => {
                console.log(toDate);
                this.setState({ toDate });
            },
            clearDates: () => this.setState({
                fromDate: null,
                toDate: null,
            })
        }
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state} {...this.props} />
        )
    }
}

export default {
    GlobalContext,
    GlobalContextProvider
}

