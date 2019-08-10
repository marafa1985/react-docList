import React from 'react';
import ReactDOM from 'react-dom';
import DocumentHeader from './DocumentHeader';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DocumentHeader sortby={{ column: "date", asc: true }} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
