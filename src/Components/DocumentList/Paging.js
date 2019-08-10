import React from 'react'
import PropTypes from 'prop-types';

const Paging = (props) => {
    return (
        <li>
            <div className="doc-list-footer">
                <ul>
                    <li className="arrow"><div onClick={() => props.handlefirstLast('first')}>{"<<"}</div></li>
                    <li className="arrow"><div onClick={() => props.handlePagenation(-1)}>{"<"}</div></li>
                    <li>{`${props.offset +1} of ${props.pages+1}`}</li>
                    <li className="arrow"><div onClick={() => props.handlePagenation(1)}>{">"}</div></li>
                    <li className="arrow"><div onClick={() => props.handlefirstLast('last')}>{">>"}</div></li>
                </ul>
            </div>
        </li>
    )
}

Paging.propTypes = {
    handlefirstLast: PropTypes.func,
    handlePagenation: PropTypes.func,
    offset: PropTypes.number,
    pages: PropTypes.number
};

export default Paging
