import React from 'react'
import PropTypes from 'prop-types'
import { FormatDate } from '../../Helper/Helpers';

const DocumentItem = (props)=> {
    let index = 0;
    return (
        props.tempDocList.map((doc) => {
            index++;
            return (
                /**
                 * Here there is no Id forach document So I added name + date, It Works.
                 */
                <li key={doc.name+ doc.date}>
                    <div className={"doc-list-item " + (index % 2 === 0 ? "dark" : "light")}>
                        <div>{doc.name}</div>
                        <div>{FormatDate(doc.date)}</div>
                    </div>
                </li>
            )
        })
    )
}

DocumentItem.propTypes = {
    tempDocList: PropTypes.array
}

export default DocumentItem

