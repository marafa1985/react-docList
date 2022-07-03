import React, { Component } from "react";
import { DocList } from '../Helper/Http';
import { FilterDocs, FilterByDate, SortByProp } from '../Helper/Helpers'

export const GlobalContext = React.createContext({
    fromDate: Date,
    toDate: Date,
    docList: [],
    tempDocList: [],
    setFromDate: () => { },
    setToDate: () => { },
    clearFilter: () => { },
    applyFilter: () => { },
    sortDocList: () => { }
});

export class GlobalContextProvider extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            fromDate: null,
            toDate: null,
            docList: [],
            tempDocList: [],
            setFromDate: (fromDate) => {
                this.setState({ fromDate });
            },
            setToDate: (toDate) => {
                this.setState({ toDate });
            },
            clearFilter: () => {
                let docListFilter = FilterDocs(DocList).sort(SortByProp('-date'));
                this.setState({
                    fromDate: null,
                    toDate: null,
                    docList: [...docListFilter],
                    tempDocList: docListFilter.slice(0, 10)
                })
            },
            applyFilter: (fromDate, todate) => {
                let docListFilter = FilterByDate(FilterDocs(DocList), fromDate, todate).sort(SortByProp('-date'));
                let tempdocListFilter = docListFilter.slice(0, 10);
                this.setState({
                    docList: [...docListFilter],
                    tempDocList: [...tempdocListFilter]
                })
            },
            sortDocList: (property, order) => {
                let newDocListorder = this.state.docList.sort(SortByProp((order ? '-' : '') + property)).slice(0, 10);
                this.setState({
                    tempDocList: [...newDocListorder]
                })
            },
            setPages: (offset, size) => {
                let newDocListorder = this.state.docList.slice(offset, size);
                this.setState({
                    tempDocList: [...newDocListorder]
                })
            }
        }
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state} {...this.props} />
        )
    }
}


