
/**
 * 
 * @param {string} docDate 
 * 
 * Conver the date to dd-MM-yyyy pattern
 */
const FormatDate = (docDate) => {
    let date = new Date(docDate);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return (day < 10 ? "0" + day : day) + '-' + ((monthIndex + 1) < 10 ? "0" + (monthIndex + 1) : (monthIndex + 1)) + '-' + year;
}

/**
 * 
 * @param {Array} _docList 
 * 
 * return filtered List ended with .pdf or .docx 
 */
const FilterDocs = (_docList) => {
    return _docList.documents.filter(doc => {
        let splitName = doc.name.split('.');
        if (splitName[splitName.length - 1] === 'pdf' || splitName[splitName.length - 1] === 'docx') {
            return doc;
        }
        return false;
    });
}
/**
 * 
 * @param {string} property
 * 
 *  it Sort the given array based on the passed property
 *  For DEC pass ('-') before property
 * 
 */
const SortByProp = (property)=>{
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export  {
    FormatDate,
    FilterDocs,
    SortByProp
}