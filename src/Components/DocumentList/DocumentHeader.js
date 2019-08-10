import React from 'react';
import PropTypes from 'prop-types'
import Triangle from "../../img/Triangle.png";

const DocumentHeader = (props) => {
    const { column, asc } = props.sortby;
    return (
        <li>
            <div className="doc-list-header">
                <div>
                    <span onClick={() => props.handleSort('name')}>Document Name </span>
                    {column === 'name' && <img src={Triangle} className={asc ? '' : 'arrowup'} alt="sort arrow" />}
                </div>
                <div className="second">
                    <span onClick={() => props.handleSort('date')}>Date </span>
                    {column === 'date' && <img src={Triangle} className={asc ? '' : 'arrowup'} alt="sort arrow" />}
                </div>
            </div>
        </li>
    )
}
DocumentHeader.propTypes = {
    sortby: PropTypes.object.isRequired,
    handleSort: PropTypes.func.isRequired
}
export default DocumentHeader
