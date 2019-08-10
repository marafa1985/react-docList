import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { GlobalContext } from "../../Context/GlobalContext";
import Paging from './Paging';
import DocumentHeader from './DocumentHeader';
import DocumentItem from './DocumentItem';
import './documentList.scss';


export class DocumentList extends Component {

    static contextType = GlobalContext;

    constructor(props) {
        super(props)

        this.state = {
            sortby: { column: 'date', asc: false },
            limit: 10,
            offset: 0,
            pages: 0
        }
    }
    componentDidMount() {
        this.setState({
            pages: Math.ceil(this.context.docList.length / 10) - 1
        });
    }
    handleSort(colHeader) {
        let { sortby } = this.state;
        this.context.sortDocList(colHeader, sortby.asc)
        this.setState({
            offset: 0,
            sortby: {
                column: colHeader,
                asc: !this.state.sortby.asc,
            }
        });
    }
    handlefirstLast = (position) => {
        let arrOffset = 0;
        let pages = Math.ceil(this.context.docList.length / 10) - 1;

        if (position === 'last') {
            arrOffset =  this.context.docList.length > 10?
            Math.ceil(this.context.tempDocList.length / 10):
            Math.floor(this.context.tempDocList.length / 10);
        }

        this.context.setPages(arrOffset * this.state.limit, (arrOffset * this.state.limit) + this.state.limit);
        this.setState({
            offset: arrOffset,
            pages: pages
        });
    }
    handlePagenation(setpage) {

        let { offset, limit } = this.state;
        let pages = Math.ceil(this.context.docList.length / 10) - 1;

        if ((offset + setpage) < 0 || offset + setpage > pages) {
            setpage = 0;
        }

        let arrOffset = (offset + setpage) * limit
        let arrSize = arrOffset + limit;
        this.context.setPages(arrOffset, arrSize);

        this.setState({
            offset: (offset + setpage)
        });

    }
    render() {
        const { sortby, offset } = this.state;
        return (
            <GlobalContext.Consumer>
                {
                    (({ tempDocList }) => (
                        <div className="doc-list" >
                            <ul>
                                <DocumentHeader sortby={sortby} handleSort={this.handleSort.bind(this)} />
                                <DocumentItem tempDocList={tempDocList} />
                                <Paging
                                    handlefirstLast={this.handlefirstLast.bind(this)}
                                    handlePagenation={this.handlePagenation.bind(this)}
                                    offset={offset}
                                    pages={
                                        this.context.docList.length > 10?
                                        Math.ceil(this.context.tempDocList.length / 10):
                                        Math.floor(this.context.tempDocList.length / 10)
                                        } />
                            </ul>
                        </div>
                    ))
                }
            </GlobalContext.Consumer>

        )
    }
}
DocumentList.propTypes = {
    docList: PropTypes.array
}
export default DocumentList
