import React, { Component } from 'react';
import Paging from './Paging';
import DocumentHeader from './DocumentHeader';
import DocumentItem from './DocumentItem';
import { DocList } from '../../Helper/Http';
import { FilterDocs, SortByProp } from '../../Helper/Helpers';
import './documentList.scss';


export class DocumentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            docList: [],
            tempDocList: [],
            sortby: { column: 'date', asc: false },
            limit: 10,
            offset: 0,
            pages: 0
        }
    }
    componentDidMount() {
        let initList = FilterDocs(DocList).sort(SortByProp("-" + this.state.sortby.column));
        let tempDocList = initList.slice(this.state.offset, this.state.limit);
        this.setState({
            docList: initList,
            tempDocList: tempDocList,
            pages: Math.ceil(initList.length / 10) - 1
        });
    }
    handleSort(colHeader) {
        let { sortby, offset, limit } = this.state;

        let initList = FilterDocs(DocList).sort(SortByProp((sortby.asc ? '-' : '') + colHeader));
        let tempDocList = initList.slice(offset, limit);

        this.setState({
            docList: initList,
            tempDocList: tempDocList,
            sortby: {
                column: colHeader,
                asc: !this.state.sortby.asc
            }
        });
    }
    handlefirstLast = (position) => {
        let arrOffset = 0
        if (position === 'last') {
            arrOffset = this.state.pages ;
        }
        let tempDocList = this.state.docList.slice(arrOffset* this.state.limit, (arrOffset* this.state.limit) + this.state.limit);

        this.setState({
            tempDocList: tempDocList,
            offset: arrOffset
        });
    }
    handlePagenation(setpage) {

        let { offset, limit, pages } = this.state;
        if ((offset + setpage) < 0 || offset + setpage > pages) {
            setpage = 0;
        }
        let arrOffset = (offset + setpage) * limit
        let arrSize = arrOffset + limit;

        let tempDocList = this.state.docList.slice(arrOffset, arrSize);

        this.setState({
            tempDocList: tempDocList,
            offset: (offset + setpage)
        });

    }

    render() {
        const { tempDocList, sortby, offset, pages } = this.state;
        return (
            <div className="doc-list" >
                <ul>
                    <DocumentHeader sortby={sortby} handleSort={this.handleSort.bind(this)} />
                    <DocumentItem tempDocList = {tempDocList}/>
                    <Paging
                        handlefirstLast={this.handlefirstLast.bind(this)}
                        handlePagenation={this.handlePagenation.bind(this)}
                        offset={offset}
                        pages={pages} />
                </ul>
            </div>
        )
    }
}

export default DocumentList
