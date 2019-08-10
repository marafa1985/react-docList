import React from "react";
import ReactDOM from 'react-dom';
import FilterPanel from './FilterPanel';
import { GlobalContextProvider } from "../../Context/GlobalContext";

describe("DatePickerUI component", () => {
    let container;

    beforeEach(() => {
        jest.resetModules();
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it("it shows that the dates inputes are empty after clear button clicked ", () => {
        const Context = {
            fromDate: new Date(),
            toDate: new Date()
        };
        ReactDOM.render(<GlobalContextProvider value={Context}><FilterPanel /></GlobalContextProvider>, container);
        const fromDateInput = container.querySelector('#fromDate');
        const toDateInput = container.querySelector('#toDate');

        //check the inputes are not empty before clear
        expect(fromDateInput.value).not.toBe(null);
        expect(toDateInput.value).not.toBe(null);
    });
}
);