import React from "react";
import ReactDOM from 'react-dom';
import Header from './Header';
import { create } from "react-test-renderer";

describe("Header component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
it("",()=>{
  const component = create(<Header profile={{firstName:"Micheal", lastName:"Mena"}} />);
    const instance = component.getInstance();
    expect(instance.state.isOpen).toBe(false);
    let result = instance.sum(5,6);
    expect(result).toBe(11);
});
  it("it shows the expected user profile fifrstName and LastName when it passed", () => {
    ReactDOM.render(<Header profile={{firstName:"Micheal", lastName:"Mena"}}/>, container);
    const firstNameInput = container.querySelector('#firstName');
    const lastNameInput = container.querySelector('#lastName');
    expect(firstNameInput.innerHTML).toBe("Micheal");
    expect(lastNameInput.innerHTML).toBe("Mena");
  });
});