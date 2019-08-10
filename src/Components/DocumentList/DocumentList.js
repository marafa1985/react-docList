import React, { Component } from 'react';
import { DocList } from '../../Mocks/Http';
import './documentList.scss';
import Triangle from "../../img/Triangle.png";

export class DocumentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            docList: []
        }
    }


    componentDidMount() {
        let filter_docList = DocList.documents.filter(doc => {
            let splitName = doc.name.split('.');
            if (splitName[splitName.length - 1] === 'pdf' || splitName[splitName.length - 1] === 'docx') {
                return doc;
            }
            return false;
        });

        this.setState({
            docList: filter_docList.slice(0, 10)
        });
    }
    formatDate = (docDate) => {
        let date = new Date(docDate);
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        return (day < 10 ? "0" + day : day) + '-' + ((monthIndex + 1) < 10 ? "0" + (monthIndex + 1) : (monthIndex + 1))  + '-' + year;
    }

    drawDocList() {
        const { docList } = this.state;
        let index = 0;
        return (
            docList.map((doc) => {
                index++;
                return (
                    <li key={doc}>
                        <div className={"doc-list-item " + (index % 2 === 0 ? "dark" : "light")}>
                            <div>{doc.name}</div>
                            <div>{this.formatDate(doc.date)}</div>
                        </div>
                    </li>
                )
            })
        )
    }
    render() {
        return (
            <div className="doc-list" >
                <ul>
                    <li>
                        <div className="doc-list-header">
                            <div>Document Name</div>
                            <div className="second">Date <img src={Triangle} alt="sort arrow" /></div>
                        </div>
                    </li>
                    {this.state.docList && this.drawDocList()}
                    <li>
                        <div className="doc-list-footer">
                            <ul>
                                <li className="arrow"><div>{"<<"}</div></li>
                                <li className="arrow"><div>{"<"}</div></li>
                                <li>1 of 10</li>
                                <li className="arrow"><div>{">"}</div></li>
                                <li className="arrow"><div>{">>"}</div></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DocumentList
