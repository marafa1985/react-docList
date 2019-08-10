import React from "react";
import { create } from "react-test-renderer";
import DatePickerUI from './DatePickerUI'

describe("DatePickerUI component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("it shows the expected date when it passed", () => {
    const component = create(<DatePickerUI id="testDate" value="07-08-2019" />);
    const instance = component.root;
    const inputDate = instance.findAllByType("input")[0];
    expect(inputDate.props.value).toBe("07-08-2019");
  });

  it("it shows the expected placeholder if the date didn't passed ", () => {
    const component = create(<DatePickerUI id="testDate" placeholder="From" />);
    const instance = component.root;
    const inputDate = instance.findAllByType("input")[0];
    expect(inputDate.props.value).toBe(undefined);
    expect(inputDate.props.placeholder).toBe("From");
  });
});