import React, { Component } from 'react'
import { FilterPanel, DocumentList } from "../../Components/index";
import { GlobalContext } from '../../Context/GlobalContext'
import './main.scss';

class Main extends Component {
    static contextType = GlobalContext;

    componentDidMount() {
        this.context.clearFilter();
    }
    render() {
        return (
            <div className="container">
                <div className="header">Documents</div>
                <div className="main">
                    <FilterPanel />
                    <DocumentList />
                </div>
            </div>
        )
    }
}

export default Main
